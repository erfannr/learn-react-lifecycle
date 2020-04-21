 
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import Home from "./components/Main/Main";
import Github from "./components/class/Github";
import MockAPI from "./components/class/MockApi";
import CountriesAPI from "./components/function/Countries";
import SignIn from "./components/function/SignIn";
import SignUp from "./components/class/SignUp";

function App() {
    return (
        <Router>
            <Navigation />

            <Switch>
                <Route exact path="/github">
                    <Github />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/mockapi">
                    <MockAPI />
                </Route>
                <Route exact path="/countries">
                    <CountriesAPI />
                </Route>
                <Route exact path="/signin">
                    <SignIn />
                </Route>
                <Route exact path="/signup">
                    <SignUp />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;