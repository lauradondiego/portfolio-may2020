import React, { Component } from "react"

import "../css/contact.css"

export default class Contact extends Component {
    render() {
        return (
            <div className="contact-container">
                <div className="headers">Contact Me</div>
                <span> <a href="mailto:lauradondiego@gmail.com" target="_blank">
                    lauradondiego@gmail.com
                </a>

                </span>
                <span>
                    (908) 907-0012
            </span>
                <span>
                    <a href="https://github.com/lauradondiego" target="_blank">Github</a>
                </span>
                <span>
                    <a href="https://linkedin.com/in/lauradondiego" target="_blank">LinkedIn</a>
                </span>
            </div>
        )
    }
}