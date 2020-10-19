import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Homepage} from "./stories/Homepage";
import {About} from "./stories/About";
import {Services} from "./stories/Services";
import {Contact} from "./stories/Contact";
import { Route, Switch } from 'react-router-dom';

function App() {
    return (
        <main>
            <Switch>
                <Route path="/" component={Homepage} exact />
                <Route path="/about" component={About} />
                <Route path="/services" component={Services} />
                <Route path="/contact" component={Contact} />
                <Route component={Error} />
            </Switch>
        </main>
    )
}

export default App;
