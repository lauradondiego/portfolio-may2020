import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Layout, Header, Drawer, Navigation, Content } from 'react-mdl';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

import Routes from "../components/Routes"
// import "../css/NavBar.css"

export default class NavBar extends Component {
    render() {
        return (
            <nav>

                <div style={{ height: '300px', position: 'relative' }}>
                    <Layout style={{ background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover' }}>
                        <Header transparent title="Title" style={{ color: 'white' }}>
                            <Navigation>
                                <NavLink to="/">Welcome!</NavLink>
                                <NavLink to="/projects" activeStyle={{
                                    background: 'red',
                                    color: 'white'
                                }}>Projects</NavLink>
                                <NavLink to="/bio">Bio</NavLink>
                                <NavLink to="/contact">Contact</NavLink>
                            </Navigation>
                        </Header>
                        <Drawer title="Title">
                            <Navigation>
                                <NavLink to="/">Welcome!</NavLink>
                                <NavLink to="/projects" activeStyle={{
                                    background: 'red',
                                    color: 'white'
                                }}>Projects</NavLink>
                                <NavLink to="/bio">Bio</NavLink>
                                <NavLink to="/contact">Contact</NavLink>
                            </Navigation>
                        </Drawer>
                        <Content />
                    </Layout>
                </div>



                {/* <div style={{ height: '300px', position: 'relative' }} > */}
                {/* <Layout fixedHeader fixedDrawer>
                    <Header title="Welcome!">

                    </Header>
                    <Drawer title="Laura Don Diego">
                        <Navigation>
                            ```    <NavLink to="/">Welcome!</NavLink>
                            <NavLink to="/projects" activeStyle={{
                                background: 'red',
                                color: 'white'
                            }}>Projects</NavLink>
                            <NavLink to="/bio">Bio</NavLink>
                            <NavLink to="/contact">Contact</NavLink>```
                        </Navigation>
                    </Drawer> */}

                {/* </Layout> */}
                {/* </div> */}
            </nav>
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