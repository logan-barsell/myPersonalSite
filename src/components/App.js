import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Nav from './Nav'
import history from '../history';
import './css/site.css';

const App = () => {
    return (
        <div className="ui container">
            <Router history={history}>
                <div>
                    <Nav />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/Skills" exact component={Skills} />
                        <Route path="/Portfolio" exact component={Portfolio} />
                        <Route path="/Contact" exact component={Contact} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
};

export default App;