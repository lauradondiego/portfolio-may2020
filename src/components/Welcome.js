import React, { useState, Component } from "react";

import Projects from "../components/Projects"
import Bio from "../components/Bio"
import Contact from "../components/Contact"
import "../css/welcome.css"
import { welcome_img } from "../components/assets/topbar_me.jpg"

import { Link } from "react-router-dom"

import { Image, Reveal, Grid } from 'semantic-ui-react'
import bf_logo from "./assets/bf_logo.png"
import bf_demo from "./assets/bf_demo.png"
import ng_logo from "./assets/ng_logo.png"
import ng_demo from "./assets/ng_demo.png"

// export default class Welcome extends Component {

//     render() {

function Welcome() {
    const [isShown, setIsShown] = useState(false)

    return (
        <div className="welcome-container">
            <img className="sticky" src={welcome_img} alt="Avatar" />
            <div className="headers"> <h1> Hello! /> </h1></div>
           
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
            <div className="projects-container-welcome">
            <div className="grid">
                    <div className="headers"> <h1> Selected Works </h1></div>

                <figure class="effect-sadie">
                    <img src={ng_logo} alt="img01" />
                    <figcaption>
                        <h2>Net <span>Giver</span></h2>
                        <p>simplify all past, present, &amp; upcoming work orders, and assigned projects, in one convenient and organized place.</p>
                        {/* <Link to="/netgiver">
                            </Link> */}
                    </figcaption>
                </figure>

                <figure class="effect-sadie">
                    <img src={bf_logo} alt="img01" />
                    <figcaption>
                        <h2>Better <span>Professor</span></h2>
                        <p>facilitate message retrieval, keep track of important due dates, project statuses, and letters of recommendation. </p>
                        <Link to="/betterprofessor">
                        </Link>

                    </figcaption>
                </figure>
            </div>
            </div>

            <div className="bio-container-welcome">
                <div className="headers"> <h1> About Me </h1></div>
                <span> Learn more about me here link</span>
            </div>
           
            <div className="contact-container-welcome">
                <div className="headers"> <h1> Contact Me </h1></div>
                <p>              <a href="mailto:lauradondiego@gmail.com">
                    lauradondiego@gmail.com
                </a>

                </p>
                <p>
                    (908) 907-0012
            </p>
                <p>
                    {<a href="https://github.com/lauradondiego">Github</a>}
                </p>
                <p>
                    {<a href="https://linkedin.com/in/lauradondiego">LinkedIn</a>}
                </p>
            </div>
            {/* what you should actually do is for the welcome page just write out different components or
                vice versa and change the components to be different than the welcome ones */}


        </div>
    )
}

export default Welcome
// }