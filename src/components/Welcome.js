import React, { useState, Component } from "react";

import Projects from "../components/Projects"
import Bio from "../components/Bio"
import Contact from "../components/Contact"
import "../css/welcome.css"
import { welcome_img } from "../components/assets/topbar_me.jpg"

// export default class Welcome extends Component {

//     render() {

function Welcome() {
    const [isShown, setIsShown] = useState(false)

    return (
        <div className="welcome-container">
            <img className="sticky" src={welcome_img} alt="Avatar" />
            <h1>Welcome! </h1>
            <span> I am an experienced Full-Stack Web Developer with a passion for creating and design, based in New Jersey. </span>
            <span>I’m available for full-time opportunities and freelance work, &amp; am open to relocating. </span>
            <span>I specialize in building JS based React Apps as well as Python, design, &amp; full-stack sites.</span>
            <span className="contact-now"
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}>
                Contact ME NOW!
            
            {isShown && (
                <a href="mailto:lauradondiego@gmail.com">
                    lauradondiego@gmail.com
                </a>)}
            </span>
            <Projects />
            <Bio />
            <Contact />
            {/* what you should actually do is for the welcome page just write out different components or
                vice versa and change the components to be different than the welcome ones */}


        </div>
    )
}

export default Welcome
// }