import React, { Component } from "react"

export default class Contact extends Component {
    render() {
        return (
            <>
                <h1>CONTACT</h1>
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
            </>
        )
    }
}