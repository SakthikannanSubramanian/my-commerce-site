import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/shopping-cart.svg";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import TrolleyOverview from "../trolley-overview/trolley-overview.component";
import MiniTrolley from "../mini-trolley/mini-trolley.component";
import { createStructuredSelector } from "reselect";
import { selectShowMiniTrolley } from "../../redux/trolley/trolley.selectors";
import { selectCurrentUser } from "../../redux/user/user.selector";

const Header = ({ currentUser, showMiniTrolley }) => (
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
      <TrolleyOverview />
    </div>
    {showMiniTrolley && <MiniTrolley />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  showMiniTrolley: selectShowMiniTrolley,
});

export default connect(mapStateToProps)(Header);
