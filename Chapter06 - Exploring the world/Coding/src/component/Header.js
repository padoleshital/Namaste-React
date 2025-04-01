import { useState } from "react";
import FoodLogo from "../../public/images/FoodLogo.png"

//Header Component display the logo, search bar and nav bar

const Header = () =>{
    const [loginBtnName, setBtnName] = useState("Login");
    return (
      <div className="Header">
        <div className="logo-container">
          <img className="logo" src={FoodLogo} alt="food-logo" />
        </div>
        <div className="nav-items">
          <ul className="nav-bar">
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Contact</li>
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