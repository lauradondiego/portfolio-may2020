import React, { Component } from "react"
import { Image, Reveal } from 'semantic-ui-react'
import bf_logo from "./assets/bf_logo.png"
import bf_demo from "./assets/bf_demo.png"
import ng_logo from "./assets/ng_logo.png"
import ng_demo from "./assets/ng_demo.png"

export default class Projects extends Component {
    render() {
        return (
            <>
                <h1>PROJECTS</h1>
                <div className="bf-images">
                    <Reveal animated='fade'>
                        <Reveal.Content visible>
                            <Image src={bf_logo} />
                        </Reveal.Content>
                        <Reveal.Content hidden>
                            <Image src={bf_demo} size='small' />
                        </Reveal.Content>
                    </Reveal>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <div className="ng-images">
                    <Reveal animated='fade'>
                        <Reveal.Content visible>
                            <Image src={ng_logo} />
                        </Reveal.Content>
                        <Reveal.Content hidden>
                            <Image src={ng_demo} size='small' />
                        </Reveal.Content>
                    </Reveal>
                </div>
            </>
        )


    }
}

// lool up REVEAL and FADE in semantic ui for project pic previews