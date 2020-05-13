import React from "react"
import { Route, Switch, BrowserRouter } from "react-router-dom"
import App from "../App"
import Welcome from "./Welcome"
import Projects from "./Projects"
import Bio from "./Bio"
import Contact from "./Contact"

function Routes() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Welcome} />
                <Route path="/projects" component={Projects} />
                <Route path="/bio" component={Bio} />
                <Route path="/contact" component={Contact} />
            </Switch>
        </div>
    );
}

export default Routes;
