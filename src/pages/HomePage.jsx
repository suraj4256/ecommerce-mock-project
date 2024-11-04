import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard/ProductCard";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        console.log("Fetched Products:", data); 
        setProducts(data); 
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error.message); 
      }
    };

    fetchProducts();
  }, []);

  const getProductsByCategory = (category) => {
    if (!products || products.length === 0) {
      console.warn("Products array is empty or undefined"); 
      return [];
    }
    return products.filter(product => product.category === category);
  };

  return (
    <div style={{ padding: 20 }}>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {['men', 'women', 'kids'].map((category) => (
        <div key={category}>
          <h2>{category.charAt(0).toUpperCase() + category.slice(1)} Products</h2>
          <div className="product-list" style={{ display: "flex", gap: 50 }}>
            {getProductsByCategory(category).slice(0, 4).map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                image={product.image}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
