import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PaymentStatusPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { image, name, price } = location.state || {}; 

  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    cardHolder: '',
    expiryDate: '',
    cvv: '',
  });
  const [paymentMessage, setPaymentMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCardDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const paymentSuccess = Math.random() > 0.5; 
    setPaymentMessage(paymentSuccess ? 'Payment Successful!' : 'Payment Failed!');
    setTimeout(()=>{
     navigate('/')
    },2000)
  };

  return (
    <div style={{
      backgroundColor: "grey",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden", 
    }}>
      <div style={{
        backgroundColor: "white",
        padding: 40,
        borderRadius: 8,
        boxShadow: "0 0 15px rgba(0,0,0,0.5)",
        width: "400px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
        <img src={image} alt={name} style={{ width: '100%', borderRadius: 8, marginBottom: 20 }} />
        <h2>{name}</h2>
        <h3>Price: ${price.toFixed(2)}</h3>
        
        {paymentMessage && (
          <div style={{
            fontSize: '24px',
            fontWeight: 'bold',
            color: paymentMessage === 'Payment Successful!' ? 'green' : 'red',
            marginBottom: '20px',
          }}>
            {paymentMessage}
          </div>
        )}
        
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <input 
            placeholder="Card Number" 
            type="text" 
            name="cardNumber" 
            onChange={handleChange} 
            required 
            style={{ width: '100%', padding: 10, margin: '10px 0', borderRadius: 5, border: '1px solid #ccc' }} 
          />
          <input 
            placeholder="Cardholder Name" 
            type="text" 
            name="cardHolder" 
            onChange={handleChange} 
            required 
            style={{ width: '100%', padding: 10, margin: '10px 0', borderRadius: 5, border: '1px solid #ccc' }} 
          />
          <input 
            placeholder="Expiry Date (MM/YY)" 
            type="text" 
            name="expiryDate" 
            onChange={handleChange} 
            required 
            style={{ width: '100%', padding: 10, margin: '10px 0', borderRadius: 5, border: '1px solid #ccc' }} 
          />
          <input 
            placeholder="CVV" 
            type="text" 
            name="cvv" 
            onChange={handleChange} 
            required 
            style={{ width: '100%', padding: 10, margin: '10px 0', borderRadius: 5, border: '1px solid #ccc' }} 
          />
          <button 
            type="submit" 
            style={{ 
              marginTop: 20, 
              padding: 10, 
              borderRadius: 5, 
              border: 'none', 
              backgroundColor: '#007bff', 
              color: 'white', 
              cursor: 'pointer',
              width: '100%',
              fontSize: '16px'
            }}
          >
            Confirm Payment
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentStatusPage;

