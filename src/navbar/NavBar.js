import React, { Component } from "react";
// import { NavLink } from "react-router-dom";
import { Layout, Header, Textfield, Drawer, Navigation } from 'react-mdl';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

// import "../css/NavBar.css"

export default class NavBar extends Component {
    render() {
        return (
            <>
                <h1>hi</h1>
                {/* style={{ height: '300px', position: 'relative' }} */}
                <Layout fixedHeader fixedDrawer>
                    <Header title="Title">
                        <Textfield
                            value=""
                            onChange={() => { }}
                            label="Search"
                            expandable
                            expandableIcon="search"
                        />
                    </Header>
                    <Drawer title="Title">
                        <Navigation>
                            <a href="/welcome">Link</a>
                            <a href="/projects">Link</a>
                            <a href="/bio">Link</a>
                            <a href="/contact">Link</a>
                        </Navigation>
                    </Drawer>
                </Layout>
                {/* </div> */}
            </>
        );
    }
}

/* <nav>
                    <ul>
                        <NavLink to="/welcome">Welcome</NavLink>
                        <NavLink to="/projects">Projects</NavLink>
                        <NavLink to="/bio">Bio</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                    </ul>
                </nav> */