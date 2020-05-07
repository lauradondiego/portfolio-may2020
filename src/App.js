import React from 'react';
import { Route, Switch, BrowserRouter } from "react-router-dom";

import "./App.css";

import NavBar from "../src/navbar/NavBar"
//check out reveal in semantic ui for projects
import Welcome from "../src/components/Welcome"
import Projects from "../src/components/Projects"
import Bio from "../src/components/Bio"
import Contact from "../src/components/Contact"
// import Test from "../src/components/Test"
import NetGiver from "../src/components/NetGiver"

function App() {
  return (
    <>
      <div className="App">
        < NavBar />
        < Welcome />
        < Projects />
        <Bio />
        < Contact />
        {/* <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route path="/welcome" render={props => <Welcome {...props} />} />
            <Route path="/projects" render={props => <Projects {...props} />} />
            <Route path="/bio" render={props => <Bio {...props} />} />
            <Route path="/contact" render={props => <Contact {...props} />} />
          </Switch>
        </BrowserRouter> */}
      </div >
    </>
  );
}

// #C39885 pinkish nude color 
// #B8A28F pale nude color
// #D4D3CB grey color
// Gt America font
export default App;
