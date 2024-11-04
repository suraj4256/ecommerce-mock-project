import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [category, setCategory] = useState(" ");
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src="" alt="" />
       <Link style={{textDecoration:"none"}} to={`/`}> <p>Mock-Ecommerce-Project</p></Link>
      </div>
      <ul className="nav-menu">
        <Link style={{textDecoration:"none"}} to={`/`}>
          <li onClick={() => setCategory("Shop")}>
            Shop{category === "Shop" ? <hr /> : <></>}
          </li>
        </Link>

        <Link style={{textDecoration:"none"}} to={`/mens`}>
          <li onClick={() => setCategory("Men")}>
            Men{category === "Men" ? <hr /> : <></>}
          </li>
        </Link>

        <Link style={{textDecoration:"none"}} to={`/women`}>
          <li onClick={() => setCategory("Women")}>
            Women{category === "Women" ? <hr /> : <></>}
          </li>
        </Link>
        <Link style={{textDecoration:"none"}} to={`/kids`}>
          <li onClick={() => setCategory("Kids")}>
            Kids{category === "Kids" ? <hr /> : <></>}
          </li>
        </Link>
      </ul>
      <div className="nav-login-cart">
        <button className="nav-login-cart button">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
