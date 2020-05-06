import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";

import Welcome from "../components/Welcome"
import Projects from "../components/Projects"

import "../css/NavBar.css"

export default class NavBar extends Component {
    render() {
        return (
            <>
                <Link activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                > Projects</Link>

                {/* <div className="nav">
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/projects">Projects</NavLink>
                    <NavLink to="/bio">Bio</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </div> */}
            </>
        );
    }
}

