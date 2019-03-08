import React from "react";
import Header from "./components/containers/Header";
import Footer from "./components/containers/Footer";
import Body from "./components/containers/Body";
import {BrowserRouter as Router, Route} from "react-router-dom";
import App from './App';
import AboutUs from './components/content/AboutUs';
import Blog from "./components/content/Blog";
import PostComment from "./components/content/PostComment";


function AppRouter() {
    return (
        <Router>
            <div>
                <Header/>
                <Body>
                <Route path="(/|/home)"  component={App}/>
                <Route path="/aboutus" exact component={AboutUs}/>
                <Route path="/blog" exact component={Blog}/>
                <Route path="/post" exact component={PostComment}/>
                </Body>
                <Footer/>
            </div>
        </Router>
    );

};

export default AppRouter;