import React from 'react';
import Menu from "../src/navbar/NavBar"
//check out reveal in semantic ui for projects
import Welcome from "../src/components/Welcome"
import Projects from "../src/components/Projects"
import Bio from "../src/components/Bio"
import Contact from "../src/components/Contact"

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          < Menu />
          < Welcome />
          <Projects />
          <Bio />
          <Contact />
        </header>
      </div >
    </>
  );
}

// #C39885 pinkish nude color 
// #B8A28F pale nude color
// #D4D3CB grey color
// Gt America font
export default App;
