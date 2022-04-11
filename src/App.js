import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import List from "./compnents/List/List";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={List} />
        <h1>mah</h1>
      </Switch>
    </Router>
  );
}

export default App;
