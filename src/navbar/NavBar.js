import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Layout, Header, Drawer, Navigation, Content } from 'react-mdl';
import { Image } from "semantic-ui-react"
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

import topbar_me from "../components/assets/topbar_me_square.png"

import Routes from "../components/Routes"
import "../css/NavBar.css"

export default class NavBar extends Component {
    render() {
        return (
            <>
                <div className="nav" >
                    <div className="nav-image">
                        <Image src={topbar_me} size="small" circular alt="image" />
                    </div>

                    <ul>
                        <NavLink to="/welcome">Welcome</NavLink>
                        <NavLink to="/projects">Projects</NavLink>
                        <NavLink to="/bio">Bio</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                    </ul>
                    {/* <Layout style={{ height: '300px', position: 'relative', background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) right / cover' }}>
                    </Layout> */}
                    {/* // TRY ADDING THE WS SCHOOLS STICKY NAV AND RENDERING COMPONENTS WITHIN A CONTENT TAG */}
                </div>
                {/* <div style={{ height: '300px', position: 'relative' }}>
                    <Layout fixedDrawer style={{ background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover' }}>
                        <Drawer>
                            <Header transparent title="Title" style={{ color: 'black' }}>
                            </Header>
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
                </div> */}



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