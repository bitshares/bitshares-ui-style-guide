import React from "react";
import {HashRouter as Router, Route} from "react-router-dom";
import "./style.less";

import Dark from "./Dark";
import Light from "./Light";
import Midnight from "./Midnight";

import Modal from "./Basic/modal";

import Home from "./Home";

const App = () => {
    return (
        <Router>
            <div className="root">
                <Route path="/" exact component={Home}/>
                <Route path="/dark" component={Dark}/>
                <Route path="/light" component={Light}/>
                <Route path="/midnight" component={Midnight}/>
                <Route path="/modal/:theme" component={Modal}/>
            </div>
        </Router>
    );
};

export default App;
