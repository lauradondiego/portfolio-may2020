import React from "react";
// import { Document } from 'react-pdf'
import { Document, Page } from 'react-pdf';
// import 'react-pdf/dist/umd/Page/AnnotationLayer.css';
// import Footer from "./Footer"
// import aws from "./assets/AWS.pdf"
import aws from "./assets/aws.jpg"
import "../css/welcome.css"
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa"

// export default class Welcome extends Component {

//     render() {

function Home() {
    // const [isShown, setIsShown] = useState(false)
    // LINKS SHOULD BE SPECIFIED AS A DIFFERENT COLOR THAN THE TTHEME COLORS 
    return (
        <div className="welcome-container">
            {/* <img className="sticky" src={welcome_img} alt="Avatar" /> */}
            <div className="headers">  Hello! </div>

            <span> I am a Full-Stack Web Developer that specializes in building JS based React Apps as well as Python, UI design,
            &amp; full-stack sites.
                  <span class="theme-color">My mission </span>
is to bring my real world design experience and creativity to life by modernizing
                 web and mobile applications.
            </span>
            <a id="resume" href="https://resume.creddle.io/resume/ibr75r9gn12" target="_blank">Resume</a>
            <a id="aws" href={aws} target="_blank">AWS Certified Cloud Practitioner</a>



            <div className="contact-container-welcome">
                {/* <div className="headers"> Hire Me </div> */}
                <contact-links>
                    <a href="mailto:lauradondiego@gmail.com" target="_blank"><FaEnvelope /></a>

                    <a href="https://github.com/lauradondiego" target="_blank"><FaGithub /></a>

                    <a href="https://linkedin.com/in/lauradondiego" target="_blank"><FaLinkedin /></a>
                </contact-links>
            </div>
            {/* maybe make LIFE come to color after loading? */}
            {/* SHOULD I MENTINO AWS AWARD HERE OR MAKE NEW COMPONENT? */}
            {/* <span className="contact-now"
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}>
                <button> <Link to="/contact"> Say hello!</Link></button>

                {isShown && (
                    // <a href="mailto:lauradondiego@gmail.com">
                    //     lauradondiego@gmail.com
                    // </a>
                    <MdTagFaces />
                )}
            </span> */}


            {/* <div style={{ background:url("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSYLwsQH948ZDf7-HsACdOEuo5Je5HrTDHLY7qZf4XFuPtawtiK&usqp=CAU")}}></div> */}

            {/* <div className="projects-container-welcome">
                <div className="grid">
                    <div className="headers">  Selected Works </div>
                    <figure class="effect-sadie">
                        <img src={ng_logo} alt="img01" />
                        <figcaption>
                            <h2>Net <span>Giver</span></h2>
                            <p>simplify all past, present, &amp; upcoming work orders, and assigned projects, in one convenient and organized place.</p>
                            <Link to="/netgiver">
                            </Link>
                        </figcaption>
                    </figure>

                    <figure class="effect-sadie">
                        <img src={bf_logo} alt="img01" />
                        <figcaption>
                            <h2>Better <span>Professor</span></h2>
                            <p>facilitate message retrieval, keep track of important due dates, project statuses, and letters of recommendation. </p>
                            <Link to="/betterprofessor">
                            </Link>

                        </figcaption>
                    </figure>
                </div>
            </div>

 */}
            {/* <div className="bio-container-welcome">
                <div className="headers"> About Me </div>
                <span> Aside from coding, I am a nature enthusiast who loves to travel, a risk taker willing to try anything once, and a foodie looking for the next best slice. </span>
                <span> Learn more about me <Link to="/bio">here.</Link></span>
            </div>
 */}

            {/* <div className="footer">
                <Footer />
            </div> */}
        </div>



    )
}

export default Home
// }