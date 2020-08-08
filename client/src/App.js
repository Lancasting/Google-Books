import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/search";
import Navbar from "./components/nav";
import "./App.css";

function App() {
  return (
    <Router basename = {process.env.PUBLIC_URL || "/"}>
      <div>
      <Navbar />
      <Route exact path="/" component={Search} />
      </div>
    </Router>
  );
}


export default App;
