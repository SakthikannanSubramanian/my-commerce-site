import React from "react";
import "./App.css";
import HomePage from "./components/homepage/homepage.component";
import ShopPage from "./components/shop/shop-component";
import CheckoutPage from "./components/checkout/checkout.component";
import Header from "./components/header/header.component";
import Authentication from "./components/authentication/authentication.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils"; // addCollectionAndDocuments
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selector";
import { createStructuredSelector } from "reselect";
import CategoryPage from "./components/category-page/category-page.component";
// import { selectCollectionsForPreview } from "./redux/shop/shop.selector";

class App extends React.Component {
  unSubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;

    // addCollectionAndDocuments(
    //   "collections",
    //   collectionsArray.map(({ title, items }) => ({ title, items }))
    // );

    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route
            exact
            path="/authentication"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <Authentication />
            }
          />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route path="/shop/:categoryId" component={CategoryPage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  // collectionsArray: selectCollectionsForPreview,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
