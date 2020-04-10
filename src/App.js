import React from "react";
import "./App.css";
import HomePage from "./components/homepage/homepage.component";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/sakthi" component={() => <h1>Sakthikannan</h1>} />
      </Switch>
    </div>
  );
}

export default App;
