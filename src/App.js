import React, { useEffect } from "react";
import "./App.css";
import HomePage from "./components/homepage/homepage.component";
import ShopPage from "./components/shop/shop-component";
import CheckoutPage from "./components/checkout/checkout.component";
import Header from "./components/header/header.component";
import Authentication from "./components/authentication/authentication.component";
// import { auth, createUserProfileDocument } from "./firebase/firebase.utils"; // addCollectionAndDocuments
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { checkUserSession } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selector";
import { createStructuredSelector } from "reselect";
// import CategoryPage from "./components/category-page/category-page.component";
// import { selectCollectionsForPreview } from "./redux/shop/shop.selector";

const App = ({ currentUser, checkUserSession }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route
          exact
          path="/authentication"
          render={() =>
            currentUser ? <Redirect to="/" /> : <Authentication />
          }
        />
        <Route exact path="/checkout" component={CheckoutPage} />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  // collectionsArray: selectCollectionsForPreview,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
  //setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
