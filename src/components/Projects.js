import React, { Component } from "react"
import { Link } from "react-router-dom"

import { Image, Reveal, Grid } from 'semantic-ui-react'
import new_bf_logo from "./assets/new_bf_logo.png"
import bf_demo from "./assets/bf_demo.png"
import ng_logo from "./assets/ng_logo.png"
import ng_demo from "./assets/ng_demo.png"
import bubbles_demo1 from "./assets/bubbles_demo1.png"
import football_demo1 from "./assets/football_demo1.png"
import checkdin_demo1 from "./assets/checkdin_demo1.png"

import "../css/Projects.css"

export default class Projects extends Component {
    render() {
        return (
            <div className="projects-container">
                <div className="headers">Projects</div>
                <p className="sub-header">Featured Works</p>

                <div className="grid">

                    <figure class="effect-sadie">
                        <img src={ng_logo} alt="img01" />
                        <figcaption>
                            <h2>Net <span>Giver</span></h2>
                            <p>simplify all past, present, &amp; upcoming work orders, and assigned projects, in one convenient and organized place.</p>
                            <Link to="/netgiver">
                            </Link>
                        </figcaption>
                    </figure>

                    <figure class="effect-sadie">
                        <img src={new_bf_logo} alt="img02" />
                        <figcaption>
                            <h2>Better <span>Professor</span></h2>
                            <p>facilitate message retrieval, keep track of important due dates, project statuses, and letters of recommendation. </p>
                            <Link to="/betterprofessor">
                            </Link>


                        </figcaption>
                    </figure>
                </div>

                <p className="sub-header">Sprint Challenges</p>
                <div className="grid">

                    <figure class="effect-sadie">
                        <img src={bubbles_demo1} alt="img01" />
                        <figcaption>
                            <h2>Bubble <span>Colors</span></h2>
                            <p> fetch the color data array, update bubble colors, and watch the fun happen!</p>
                        </figcaption>
                    </figure>

                    <figure class="effect-sadie">
                        <img src={football_demo1} alt="img02" />
                        <figcaption>
                            <h2>Football<span>Scoreboard</span></h2>
                            <p>Become an oldschool scorekeeper and hit the interactive buttons each time a team scores  </p>

                        </figcaption>
                    </figure>

                    <figure class="effect-sadie">
                        <img src={checkdin_demo1} alt="img01" />
                        <figcaption>
                            <h2>Checkd' <span>In</span></h2>
                            <p>Keep all of your upcoming trip details organized and accessible in one convenient app</p>

                        </figcaption>
                    </figure>
                </div>
            </div>
        )


    }
}