import React from "react";
import "./App.css";
import HomePage from "./components/homepage/homepage.component";
import ShopPage from "./components/shop/shop-component";
import Header from "./components/header/header.component";
import Authentication from "./components/authentication/authentication.component";
import { auth } from "./firebase/firebase.utils";
import { Route, Switch } from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unSubscribeFromAuth = null;
  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/authentication" component={Authentication} />
        </Switch>
      </div>
    );
  }
}

export default App;
