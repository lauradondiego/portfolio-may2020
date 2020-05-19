import React, { Component } from "react";

import Projects from "../components/Projects"
import Bio from "../components/Bio"
import Contact from "../components/Contact"
import "../css/welcome.css"
import { welcome_img } from "../components/assets/topbar_me.jpg"

export default class Welcome extends Component {
    render() {
        return (
            <div className="welcome-container">
                <img src={welcome_img} alt="image"></img>
                <h1>Welcome! </h1>
                <h1> I am an experienced Full-Stack Web Developer with a passion for creating and design, based in New Jersey. I’m available for full-time opportunities and freelance work, &amp; am open to relocating. I specialize in building JS based React Apps as well as Python, design, &amp; full-stack sites.
                Contact Me Now link</h1>
                <Projects />
                <Bio />
                <Contact />
                {/* what you should actually do is for the welcome page just write out different components or
                vice versa and change the components to be different than the welcome ones */}


            </div>
        )
    }

}