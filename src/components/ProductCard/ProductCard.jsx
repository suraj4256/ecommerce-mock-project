import React from 'react'
import PropTypes from 'prop-types'; 
import './ProductCard.css'
import { Link } from 'react-router-dom';

const ProductCard = ({ id, name, description, price, image }) => {
  return (
    <div className="product-card">
     <Link to={`/product/${id}`}>
        <img src={image} alt={name} />
        <h3>{name}{id}</h3>
        <p>{description}</p>
        <p>${price.toFixed(2)}</p>
      </Link>
    <button>Add to Cart</button>
    </div>
  );
};

// Prop types validation
ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};


export default ProductCard;
