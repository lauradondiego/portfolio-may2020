import React from 'react';

import "./App.css";

import Routes from "./components/Routes"
import NavBar from "../src/navbar/NavBar"
//check out reveal in semantic ui for projects

function App() {
  return (
    <>
      <div className="App">
        < NavBar />
        <Routes />
      </div >
    </>
  );
}

// #C39885 pinkish nude color 
// #B8A28F pale nude color
// #D4D3CB grey color
// Gt America font
export default App;
