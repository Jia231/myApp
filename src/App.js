import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import Dashboard from "./components/pages/Dashboard";
import GuestRoute from "./components/routes/GuestRoute";
import { connect } from "react-redux";
import UserRoute from "./components/routes/UserRoute";
import TopNavigation from "./components/navigation/TopNavigation";
import SignUp from "./components/pages/SignUp";

const App = ({ location, isAuthenticated }) => (
  <div className="ui container">
    {isAuthenticated && <TopNavigation />}
    <Route location={location} path="/" exact component={HomePage} />
    <GuestRoute
      location={location}
      path="/LoginPage"
      exact
      component={LoginPage}
    />
    <UserRoute
      location={location}
      path="/Dashboard"
      exact
      component={Dashboard}
    />
    <GuestRoute location={location} exact path="/SignUp" component={SignUp} />
  </div>
);

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.token
  };
}
export default connect(mapStateToProps)(App);
