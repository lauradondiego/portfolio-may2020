import React from "react"
import { Switch, Route, BrowserRouter } from "react-router-dom"
import App from "../App"
import Welcome from "./Welcome"
import Projects from "./Projects"
import Contact from "./Contact"

function Routes() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Welcome} />
                    <Route path="/projects" component={Projects} />
                    <Route path="/contact" component={Contact} />

                    {/* {/* <Route path="/projects" render={props => <Projects {...props} />} /> */}
                    {/* <Route path="/upcoming" render={props => <Upcoming {...props} />} /> */}
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default Routes;
