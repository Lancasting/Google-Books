import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import  Search  from "./pages/search";
import Navbar from "./components/nav";
import "./App.css";
import Saved from "./pages/saved";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router basename = {process.env.PUBLIC_URL || "/"}>
      <div>
      <Wrapper>
      <Navbar />
      <Switch>
      <Route exact path="/" component={Search} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/saved" component={Saved} />
      </Switch>
      </Wrapper>
      </div>
    </Router>
  );
}


export default App;
