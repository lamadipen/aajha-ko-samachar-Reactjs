import React from "react";
import Header from "./components/containers/Header";
import Footer from "./components/containers/Footer";
import Body from "./components/containers/Body";
import {BrowserRouter as Router, Route} from "react-router-dom";
import App from './App';
import AboutUs from './components/content/AboutUs';


function AppRouter() {
    return (
        <Router>
            <div>
                <Header/>
                <Body>
                <Route path="(/|/home)"  component={App}/>
                <Route path="/aboutus" exact component={AboutUs}/>
                </Body>
                <Footer/>
            </div>
        </Router>
    );

};

export default AppRouter;