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
import React from "react";

// core components
import NavBar from "components/Navbars/NavBar.js";

// index page sections
import Welcome from "./Welcome.js";
import CreateGame from "../components/CreateGame";
import StartGame from "../components/StartGame";

class Index extends React.Component {
    componentDidMount() {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
    }

    constructor(props, context) {
        super(props, context);
        this.state = {
            game: "",
            status: "",
            join_code: "",
            round: 0,
        };
    }

    updateGameStatus = gameStatus => {
        if (gameStatus === "created") {
            // create game api
            let response = {"join_code": "HT67G1", "game_id": 12}   //get response
            if (response) {
                this.setState({
                    game: response["game_id"],
                    status: gameStatus,
                    join_code: response["join_code"],
                })
            }
        }
        return this.state
    };

    createGame() {
        let response = {"join_code": "HT67G1", "game_id": 12}   //get response
        if (response) {
            this.setState({
                game: response["game_id"],
                status: "created",
                join_code: response["join_code"],
            })
        }
    }

    startGame() {
        let response = {"question": "test q?", "round": 1}   //get response
        if (response) {
            this.setState({
                status: "started",
                round: response["round"],
            })
        }
    }

    reset() {
        this.setState({
            game: "",
            status: "",
            join_code: "",
        })
    }

    updateState = (key, value) => {
        switch (key) {
            case ("status"):
                switch (value) {
                    case "created":
                        console.log("create game")
                        this.createGame();
                        break;
                    case "started":
                        console.log("start game")
                        this.startGame();
                        break;
                    default:
                        this.reset();
                }
                break;

            default:
                break;
        }
    }

    render() {
        console.log("render")
        console.log(this.state)

        return (
            <>
                <NavBar/>
                <main ref="main">
                    <div className="position-relative">
                        {/* Hero for FREE version */}
                        <section className="section section-hero section-shaped pb-0 pb-md-3 pb-lg-6">
                            {/* Background circles */}
                            <div className="shape shape-style-1 shape-default">
                                <span className="span-150" />
                                <span className="span-50" />
                                <span className="span-50" />
                                <span className="span-75" />
                                <span className="span-100" />
                                <span className="span-75" />
                                <span className="span-50" />
                                <span className="span-100" />
                                <span className="span-50" />
                                <span className="span-100" />
                            </div>
                            <div className={this.state.status === "" ? "" : "hidden"}>
                                <Welcome />
                                <CreateGame updateState={this.updateState}/>
                            </div>
                            <div className={this.state.status === "created" ? "" : "hidden"}>
                                <StartGame updateState={this.updateState}/>
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
