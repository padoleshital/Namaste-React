import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import logoImage from "../assets/images/FoodLogo.png";

//Header Component display the logo, search bar and nav bar

const Header = () =>{
    const [loginBtnName, setBtnName] = useState("Login");
    useEffect(() =>{
      
    },[])

    return (
      <div className="Header">
        <div className="logo-container">
          <img className="logo" src={ logoImage } alt="food-logo" />
        </div>
        <div className="nav-items">
          <ul className="nav-bar">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link></li>
            <li>
              <Link to="/contact">Contact</Link></li>
            <li>
              <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            </li>
            <button
              className="btn-login" 
              onClick={() => {
                loginBtnName === "Login" ? setBtnName("Logout") : setBtnName("Login") ;
              }}
            >
              {loginBtnName}
            </button>
          </ul>
        </div>
      </div>
    );
}

export default Header;