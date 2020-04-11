import React from "react";
import "./App.css";
import HomePage from "./components/homepage/homepage.component";
import ShopPage from "./components/shop/shop-component";
import Header from "./components/header/header.component";
import Authentication from "./components/authentication/authentication.component";

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/authentication" component={Authentication} />
      </Switch>
    </div>
  );
}

export default App;
