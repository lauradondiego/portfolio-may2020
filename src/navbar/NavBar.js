import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "../css/NavBar.css"

export default class NavBar extends Component {
    render() {
        return (
            <>
                <div className="nav">
                    <NavLink to="/welcome">Welcome</NavLink>
                    <NavLink to="/projects">Projects</NavLink>
                    <NavLink to="/bio">Bio</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </div>
            </>
        );
    }
}

