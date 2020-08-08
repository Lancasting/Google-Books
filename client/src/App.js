import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/search";
import Navbar from "./components/nav";
import "./App.css";

function App() {
  return (
    <Router basename = {process.env.PUBLIC_URL || "/"}>
      <div>
      <Navbar />
      <Switch>
      <Route exact path="/" component={Search} />
      <Route exact path="/search" component={Search} />
      </Switch>
      </div>
    </Router>
  );
}


export default App;
