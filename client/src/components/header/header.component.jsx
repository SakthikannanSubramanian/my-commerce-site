import React from "react";
import { ReactComponent as Logo } from "../../assets/shopping-cart.svg";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import TrolleyOverview from "../trolley-overview/trolley-overview.component";
import MiniTrolley from "../mini-trolley/mini-trolley.component";
import { createStructuredSelector } from "reselect";
import { selectShowMiniTrolley } from "../../redux/trolley/trolley.selectors";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { signOutStart } from "../../redux/user/user.actions";

import {
  HeaderContainer,
  LogoContainer,
  OptionLink,
  OptionsContainer,
  HeaderLabelContainer,
  HeaderLabel,
} from "./header.styles";

const Header = ({ signOutStart, currentUser, showMiniTrolley }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <HeaderLabelContainer>
      <HeaderLabel>Sakthi Sweets</HeaderLabel>
    </HeaderLabelContainer>
    <OptionsContainer>
      <OptionLink as="div">
        Hi! {currentUser ? currentUser.displayName : "New User"}
      </OptionLink>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/shop">CONTACT</OptionLink>
      {currentUser ? (
        <OptionLink
          as="div"
          onClick={() => {
            signOutStart();
          }}
        >
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to="/authentication">SIGN IN</OptionLink>
      )}
      <TrolleyOverview />
    </OptionsContainer>
    {showMiniTrolley && <MiniTrolley />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  showMiniTrolley: selectShowMiniTrolley,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
