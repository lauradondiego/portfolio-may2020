import React, { Component } from "react"

import "../css/essays.css"

export default class Essays extends Component {
    render() {
        return (
            <>
                <div className="essays-container">

                    <div className="headers">Essays</div>
                    <span>Essays that may inspire you, by me.</span>
                    <p>I explore a range of topics like streetwear, coding, gaming, and web development. </p>
                    <p>I look forward to discussing how I transitioned into coding, created my clothing brand from the ground up, and expressing my thoughts within the gaming culture industry.  </p>
                    <a href="https://lauradondiego.substack.com/" target="_blank">Substack</a>
                </div>
            </>
        )
    }
}

