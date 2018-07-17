import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import List from "./pages/List";
// import NoMatch from "./pages/NoMatch";
import SignUp from "./pages/Sign-Up";
import Login from "./pages/Login";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import './App.css';


const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/list" component={List} />
      </Switch>
      <Footer/>
    </div>
  </Router>
);

export default App;
