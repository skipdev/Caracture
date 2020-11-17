import React from 'react';
import './App.css';
import {Homepage} from "./stories/Homepage";
import {About} from "./stories/About";
import {Services} from "./stories/Services";
import {Contact} from "./stories/Contact";
import {Treadplates} from "./stories/Treadplates";
import {Lighting} from "./stories/Lighting";
import {InteriorTrim} from "./stories/InteriorTrim";
import {ExteriorTrim} from "./stories/ExteriorTrim";
import { Route, Switch } from 'react-router-dom';

function App() {
    return (
        <main >
            <Switch>
                <Route path="/" component={Homepage} exact />
                <Route path="/about" component={About} />
                <Route path="/services" component={Services} />
                <Route path="/contact" component={Contact} />
                <Route path="/treadplates" component={Treadplates} />
                <Route path="/lighting" component={Lighting} />
                <Route path="/interior" component={InteriorTrim} />
                <Route path="/exterior" component={ExteriorTrim} />
                <Route component={Error} />
            </Switch>
        </main>
    )
}

export default App;
