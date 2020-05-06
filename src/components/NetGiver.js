//link this to projects photo
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

export default class NetGiver extends Component {
    render() {
        return (
            <>
                <h1> The Net Giver Work Order Management</h1>

                <p>
                    <FaRegCalendarAlt /> Oct 2019 - Nov 2019
            </p>
                <p>
                    <FaLaptopCode /> Tech Stack: React Native, GraphQL, Node.js,
              PostgreSQL, hosted through AWS (Amazon Web Services), image
              storage through S3 Bucket
            </p>
                <p>
                    <FaAngleRight />I was commissioned for a two-month project to
              create the Work Order Management app for The Net Giver, a
              privately owned property management company that promotes socially
              and environmentally responsible community development. We were
              able to develop a modern mobile app used to simplify work order
              management by designing a clean process that workers could use
              right from their phones. This system allows property managers,
              real estate professionals, maintenance workers, etc., to keep
              track of their work orders. The user has the ability to register
              and sign in, upload photos, leave comments, scan barcodes, adjust
              the urgency and status of the job, and keep track of all of their
              assigned projects. We facilitated weekly meetings with the
              CEO/stakeholder of The Net Giver organization, met demands on
              time, provided thorough reports throughout the project, and
              successfully deployed the app to the Google Play store.{" "}
                </p>
                <p>
                    <FaAngleRight />
              Created details page, implemented styling using React Native stylesheets to create custom buttons and icons that allow the user to identify the status and urgency of the job            </p>
                <p>
                    <FaAngleRight /> Opportunity to learn Twilio for messaging, Authy, GraphQL, general React Native concepts, functionality and implementation of barcode scanning, and photo uploading
            </p>
                <p>
                    <FaGithub />
                    {
                        <a href="https://github.com/Lambda-School-Labs/net-giver-work-order-management-fe">
                            Repository
                </a>
                    }
                </p>
                <p>
                    <FaGooglePlay />
                    {
                        <a href="https://play.google.com/store/apps/details?id=com.netgiver.workordermanager">
                            Download
                </a>
                    }
                </p>
                <div className="ng-demo">
                    <img src={ng_demo} alt="demo" />
                </div>


            </>
        )
    }
}