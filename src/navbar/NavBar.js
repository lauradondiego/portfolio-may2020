import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import { Layout, Header, Drawer, Navigation, Content } from 'react-mdl';
import { Image } from "semantic-ui-react"
import { FaBars, FaWindowClose } from "react-icons/fa";
import ResponsiveMenu from 'react-responsive-navbar';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

import topbar_me from "../components/assets/topbar_me_square.png"

// import Routes from "../components/Routes"
import "../css/NavBar.css"

// export default class NavBar extends Component {
//     render() {
function NavBar() {
    const [isActive, setIsActive] = useState()
    return (
        <>
            <div className="nav" >
                <div className="nav-image">
                    <Image src={topbar_me} size="small" circular alt="image" />
                </div>
                <ResponsiveMenu
                    menuOpenButton={<FaBars />}
                    menuCloseButton={<FaWindowClose />}
                    changeMenuOn="600px"
                    smallMenuClassName="small-menu"
                    menu={
                        <ul>
                            <NavLink to="/home">HOME</NavLink>
                            <NavLink to="/projects">PROJECTS</NavLink>
                            <NavLink to="/essays" >ESSAYS</NavLink>
                            <NavLink to="/contact">CONTACT</NavLink>
                        </ul>
                    }
                />
                {/* <Layout style={{ height: '300px', position: 'relative', background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) right / cover' }}>
                    </Layout> */}

                {/* // TRY ADDING THE WS SCHOOLS STICKY NAV AND RENDERING COMPONENTS WITHIN A CONTENT TAG */}
                <span className="active-maybe"
                    onMouseEnter={() => setIsActive()}>
                    {isActive && (
                        <p>hi</p>
                    )}</span>
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
    )
}
export default NavBar
// }

