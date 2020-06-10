import React from "react"
import { Route, Switch, BrowserRouter } from "react-router-dom"
import App from "../App"
import Home from "./Home"
import Projects from "./Projects"
import Essays from "./Essays"
import Contact from "./Contact"
import BetterProfessor from "./BetterProfessor"
import NetGiver from "./NetGiver"

function Routes() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/home" component={Home} />
                <Route path="/projects" component={Projects} />
                <Route path="/essays" component={Essays} />
                <Route path="/contact" component={Contact} />
                <Route path="/betterprofessor" component={BetterProfessor} />
                <Route path="/netgiver" component={NetGiver} />
            </Switch>
        </div>
    );
}

export default Routes;
