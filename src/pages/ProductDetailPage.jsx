import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const response = await fetch(`http://localhost:5000/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error(error);
        alert(error.message);
        navigate("/");
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetail();
  }, [id, navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>No product found.</div>;
  }

  return (
    <div style={{ display: "flex", padding: 20, gap: 50 }}>
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "900px", height: "900px" }}
      />
      <div>
        <h1 style={{ fontSize: "50px" }}>{product.name}</h1>
        <p style={{ fontWeight: "bold", textDecoration: "underline" }}>
          {" "}
          About this item
        </p>

        <p style={{ fontSize: "20px" }}>{product.description}</p>
        <p style={{ fontSize: "30px" }}>Price: ${product.price}</p>
        <Link
          to={`/checkout`}
          state={{
            id: product.id,
            image: product.image,
            name: product.name,
            price: product.price,
          }}
        >
          {" "}
          <button
            style={{
              padding: "10px",
              width: "157px",
              height: "58px",
              outline: "none",
              border: "1px solid #7a7a7a",
              borderRadius: "75px",
              color: "#515151",
              fontSize: "20px",
              cursor: "pointer",
              fontWeight: "500",
              background: "white",
            }}
          >
            Buy Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductDetailPage;
