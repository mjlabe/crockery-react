import React from 'react';

// core components
import NavBar from "components/Navbars/NavBar.js";

// index page sections
import CreateGameView from "./CreateGameView";
import PlayGameView from "./PlayGameView";

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            game: "",
            round: 0,
            joinCode: "",
            winner: "",
            score: ""
        };
    }

    setGameData = (gameState) => {
        this.setState(gameState)
    }

    render() {
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
                            {(this.state.game === "started" ?
                                <PlayGameView state={this.state}/> :
                                <CreateGameView setGameData={this.setGameData}/>)}
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
