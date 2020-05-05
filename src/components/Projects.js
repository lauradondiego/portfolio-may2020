import React, { Component } from "react"
import { Image, Reveal, Grid } from 'semantic-ui-react'
import bf_logo from "./assets/bf_logo.png"
import bf_demo from "./assets/bf_demo.png"
import ng_logo from "./assets/ng_logo.png"
import ng_demo from "./assets/ng_demo.png"

import "../css/Projects.css"

export default class Projects extends Component {
    render() {
        return (
            <>
                <div className="grid">
                    <h1>PROJECTS</h1>

                    <figure class="effect-sadie">
                        <img src={ng_logo} alt="img01" />
                        <figcaption>
                            <h2>Net <span>Giver</span></h2>
                            <p>simplify all past, present, &amp; upcoming work orders, and assigned projects, in one convenient and organized place.</p>
                            <a href="#">View more</a>
                        </figcaption>
                    </figure>

                    <figure class="effect-sadie">
                        <img src={bf_logo} alt="img01" />
                        <figcaption>
                            <h2>Better <span>Professor</span></h2>
                            <p>facilitate message retrieval, keep track of important due dates, project statuses, and letters of recommendation. </p>
                            <a href="#">View more</a>
                        </figcaption>
                    </figure>
                </div>
            </>
        )


    }
}