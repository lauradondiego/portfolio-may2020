import React, { Component } from "react"
import { Label, Image } from "semantic-ui-react"

import ng_logo from "../components/assets/ng_logo.png"
import "../css/bio.css"

export default class Bio extends Component {
    constructor(props) {
        super(props);
        this.plusSlides = this.plusSlides.bind(this);
    }

    // slideIndex = 1
    // showSlides(slideIndex);

    plusSlides(n) {
        var slideIndex = 1;
        showSlides(slideIndex);
        showSlides(slideIndex += n)
        console.log('click happened');
    }
    render() {

        return (
            <>
                <div className="bio-container">

                    <h1>BIO</h1>
                    <h2>ADD RESUME LINK</h2>
                    <h2>
                        In 2018 I embarked on an exciting journey to New York City, and took
            Intro to Python head on <Label>print("Hello World")</Label> It
            has been quite the adventure since.
                    My curiousty led me to try this new thing that I had only heard about, my spontaneous side urged me to quit my 9-5 and pursue it
                    full time, and my dedication is what made me never look back.

                    When I'm not coding, I am emersed in my streetwear brand, learning new design tools, social media marketing,
                    and brainstorming new sketch ideas for upcoming launches. The most rewarding feeling is seeing something I have
            created come to life!

                    I enjoy volunteering at my local SPCA animal shelter, as well as spending time with my own pets.
                    I like reading mystery and horror novels, listening to podcasts about outter space, and watching Earth documentaries.

                    My typical weekends include seeking out new
                    restaurants, competitive game nights with friends, and traveling whenever I can.

                    Throughout my extensive travels, I have become fascinated by culture, food,
                    and technology. A defining moment in my life was when I lived in Africa at a wildlife rehabilitation
                    center. I overcame challenges, made lifelong friends, took on leadership roles, and most
                    importantly, aided in saving the lives of Africa's wildlife.

                    I am passionate and not afraid to take risks, yet am level headed
                    and can make quick decisions under pressure.

                    I am career focused and eager to learn new technologies and
                    languages. As a successful entrepreneuer and well balanced individual, I am confident I can take on any challenge in the tech world
            and am excited to create.</h2>
                    <div className="gallery-container">
                        <div className="mySlides">
                            <img src={ng_logo} alt="img01" />
                        </div>
                        <div className="mySlides">
                            <img src={ng_logo} alt="pic2" />
                        </div>
                        <div className="mySlides">
                            <img src={ng_logo} alt="pic3" />
                        </div>
                        <div className="mySlides">
                            <img src={ng_logo} alt="pic4" />
                        </div>
                        <div className="mySlides">
                            <img src={ng_logo} alt="pic5" />
                        </div>

                        {/* <button className="prev" onClick={plusSlides - 1} />
        <button className="next" onClick={plusSlides + 1} />  */}
                        <button onClick={this.plusSlides}>previous</button>
                        <button onClick={this.plusSlides}>next</button>

                        <div className="caption-container">
                            <p id="caption"></p>
                        </div>

                        <div className="row">
                            <div className="column">
                                <img className="demo cursor" src={ng_logo} onClick={currentSlide(1)} alt="pic1">

                                </img>
                            </div>
                            <div className="column">
                                <img className="demo cursor" src={ng_logo} onClick={currentSlide(2)} alt="pic2">

                                </img>
                            </div>
                            <div className="column">
                                <img className="demo cursor" src={ng_logo} onClick="currentSlide(3)" alt="pic3">

                                </img>
                            </div>
                            <div className="column">
                                <img className="demo cursor" src={ng_logo} onClick="currentSlide(4)" alt="pic4">

                                </img>
                            </div>
                            <div className="column">
                                <img className="demo cursor" src={ng_logo} onClick="currentSlide(5)" alt="pic5">

                                </img>
                            </div>

                        </div>
                    </div>

                </div>
            </>
        )
    }
}

