import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CheckOutPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { image, name, price } = location.state; 
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    address: '',
    phone: '',
    paymentMethod: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

     // Randomly succeed or fail
    const paymentSuccess = Math.random() > 0.5;

    // Navigate to PaymentStatusPage with success flag
    navigate('/payment-status', {
      state: {
        success: paymentSuccess,
        image,
        name,
        price,
      },
    });
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
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <input 
            placeholder="Enter First Name" 
            type="text" 
            name="fname" 
            onChange={handleChange} 
            required 
            style={{ width: '100%', padding: 10, margin: '10px 0', borderRadius: 5, border: '1px solid #ccc' }} 
          />
          <input 
            placeholder="Enter Last Name" 
            type="text" 
            name="lname" 
            onChange={handleChange} 
            required 
            style={{ width: '100%', padding: 10, margin: '10px 0', borderRadius: 5, border: '1px solid #ccc' }} 
          />
          <input 
            placeholder="Enter Your Email" 
            type="email" 
            name="email" 
            onChange={handleChange} 
            required 
            style={{ width: '100%', padding: 10, margin: '10px 0', borderRadius: 5, border: '1px solid #ccc' }} 
          />
          <input 
            placeholder="Enter Your Address" 
            type="text" 
            name="address" 
            onChange={handleChange} 
            required 
            style={{ width: '100%', padding: 10, margin: '10px 0', borderRadius: 5, border: '1px solid #ccc' }} 
          />
          <input 
            placeholder="Enter Your Phone Number" 
            type="tel" 
            name="phone" 
            onChange={handleChange} 
            required 
            style={{ width: '100%', padding: 10, margin: '10px 0', borderRadius: 5, border: '1px solid #ccc' }} 
          />
          <select 
            name="paymentMethod" 
            onChange={handleChange} 
            required 
            style={{ width: '100%', padding: 10, margin: '10px 0', borderRadius: 5, border: '1px solid #ccc' }}
          >
            <option value="">Select Payment Method</option>
            <option value="creditCard">Credit Card</option>
            <option value="paypal">PayPal</option>
          </select>
          <button 
            type="submit" 
            style={{ 
              marginTop: 20, 
              padding: 10, 
              borderRadius: 5, 
              border: 'none', 
              backgroundColor: '#28a745', 
              color: 'white', 
              cursor: 'pointer',
              width: '100%',
              fontSize: '16px'
            }}
          >
            Proceed to Payment
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckOutPage;
