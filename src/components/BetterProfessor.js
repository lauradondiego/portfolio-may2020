import React, { Component } from "react"
import {
    FaGooglePlay,
    FaGlasses,
    FaHeart,
    FaAngleRight,
    FaRegCalendarAlt,
    FaLaptopCode,
    FaGithub
} from "react-icons/fa";
import { Image } from "semantic-ui-react";
import ng_logo from "./assets/ng_logo.png"
import ng_demo from "./assets/ng_demo.png"
import bf_logo from "./assets/bf_logo.png"
import bf_demo from "./assets/bf_demo.png"



export default class BetterProfessor extends Component {
    render() {
        return (
            <>
                <h1>hi</h1>
                <p>
                    <FaRegCalendarAlt /> Sep 2019
            </p>
                <p>
                    <FaLaptopCode /> Tech Stack: Node.js, React.js, Express.js, Knex.js, sqlite3, JWT
            </p>
                <p>

                    Better Professor is an organization app for professors and students to facilitate message retrieval, keep track of important due dates, project statuses, and letters of recommendation. I collaborated with one other web dev and we worked together on the backend to write API endpoints, run unit testing,  and data seeding.             </p>
                <p>
                    <FaAngleRight />
            Maximized planning time, using db designer as a visual tool to connect database tables, and layout the backend, in conjunction with the frontend team
            </p>
                <p>
                    <FaAngleRight /> Wrote API calls and created endpoints to facilitate information flow between the React.js front end and the Node.js backend
            </p>
                <p>
                    <FaAngleRight />  Created backend using Knex.js to run migrations, seed data, create models, and implement the models within their respective routers, implemented Supertest to run unit tests, imported Express.js to create endpoints to connect to student/messages/users databases
            </p>
                <p>
                    <FaAngleRight /> Applied JWT, Bcrypt, and Restricted Middleware for security
            </p>

                <p>
                    <FaGlasses />
                    {
                        <a href="https://better-professor-bw.netlify.com/">
                            Better Profesor
                </a>
                    }
                </p>
                <div className="bf-demo">
                    <img src={bf_demo} alt="demo" />
                </div>

            </>
        )
    }
}