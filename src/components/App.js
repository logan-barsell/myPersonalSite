import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Nav from './Nav';
import Footer from './Footer';
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
                        <Route path="/skills" exact component={Skills} />
                        <Route path="/portfolio" exact component={Portfolio} />
                        <Route path="/contact" exact component={Contact} />
                    </Switch>
                    <Footer />
                </div>
            </Router>
        </div>
    );
};

export default App;