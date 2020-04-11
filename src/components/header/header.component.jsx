import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/shopping-cart.svg";
import { auth } from "../../firebase/firebase.utils";

const Header = ({ currentUser }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>

    <div className="options">
      <label className="option">
        Hi! {currentUser ? currentUser.displayName : "New User"}
      </label>
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/authentication">
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);

export default Header;
