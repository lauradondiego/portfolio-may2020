import React, { Component } from "react"
import bf_logo from "./assets/bf_logo.png"
import bf_demo from "./assets/bf_demo.png"
import ng_logo from "./assets/ng_logo.png"
import ng_demo from "./assets/ng_demo.png"

import "../css/Test.css"


export default class Test extends Component {
    render() {
        return (
            <>
                <div class="grid">
                    <figure class="effect-sadie">
                        <img src={bf_logo} alt="img01" />
                        <figcaption>
                            <h2>Nice <span>Lily</span></h2>
                            <p>Lily likes to play with crayons and pencils</p>
                            <a href="#">View more</a>
                        </figcaption>
                    </figure>

                    <figure class="effect-sadie">
                        <img src={ng_logo} alt="img01" />
                        <figcaption>
                            <h2>Nice <span>Lily</span></h2>
                            <p>Lily likes to play with crayons and pencils</p>
                            <a href="#">View more</a>
                        </figcaption>
                    </figure>
                </div>
            </>
        )
    }
}
