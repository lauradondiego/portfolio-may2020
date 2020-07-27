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

export default App;
