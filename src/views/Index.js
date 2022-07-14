/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, {useState} from 'react';

// core components
import NavBar from "components/Navbars/NavBar.js";

// index page sections
import Welcome from "./Welcome.js";
import CreateGame from "../components/CreateGame";
import StartGame from "../components/StartGame";


class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            game: "",
            round: 0,
        };
    }

    createGame() {
        // api call
        this.setState({game: "kjnwdf"})
    }

    startGame() {
        // api call
        this.setState({round: 1})
    }



    render() {
        return (
            <>
                <NavBar/>
                <main ref="main">
                    <div className="position-relative">
                        {/* Hero for FREE version */}
                        <section className="section section-hero section-shaped pb-0 pb-md-3 pb-lg-6">
                            {/* Background circles */}
                            <div className="shape shape-style-1 shape-default">
                                <span className="span-150"/>
                                <span className="span-50"/>
                                <span className="span-50"/>
                                <span className="span-75"/>
                                <span className="span-100"/>
                                <span className="span-75"/>
                                <span className="span-50"/>
                                <span className="span-100"/>
                                <span className="span-50"/>
                                <span className="span-100"/>
                            </div>
                            <div className={this.state.game === "" ? "" : "hidden"}>
                                <Welcome/>
                                <CreateGame onClick={() => this.createGame()}/>
                            </div>
                            <div className={this.state.game !== "" ? "" : "hidden"}>
                                <StartGame onClick={() => this.startGame()}/>
                            </div>
                            <div className="separator separator-bottom separator-skew zindex-100">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    preserveAspectRatio="none"
                                    version="1.1"
                                    viewBox="0 0 2560 100"
                                    x="0"
                                    y="0"
                                >
                                    <polygon
                                        className="fill-white"
                                        points="2560 0 2560 100 0 100"
                                    />
                                </svg>
                            </div>
                        </section>
                    </div>
                </main>
            </>
        );
    }
}

export default Index;
