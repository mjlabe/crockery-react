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
// import Buttons from "./IndexSections/Buttons.js";
// import CustomControls from "./IndexSections/CustomControls.js";
// import Menus from "./IndexSections/Menus.js";
// import Navbars from "./IndexSections/Navbars.js";
// import Tabs from "./IndexSections/Tabs.js";
// import Progress from "./IndexSections/Progress.js";
// import Pagination from "./IndexSections/Pagination.js";
// import Pills from "./IndexSections/Pills.js";
// import Labels from "./IndexSections/Labels.js";
// import Alerts from "./IndexSections/Alerts.js";
// import Typography from "./IndexSections/Typography.js";
// import Modals from "./IndexSections/Modals.js";
// import Datepicker from "./IndexSections/Datepicker.js";
// import TooltipPopover from "./IndexSections/TooltipPopover.js";
// import Carousel from "./IndexSections/Carousel.js";
// import Icons from "./IndexSections/Icons.js";
// import Download from "./IndexSections/Download.js";

class Index extends React.Component {
    componentDidMount() {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
    }

    constructor(props, context) {
        super(props, context);
        this.state = {
            game: "started",
            round: 1
        };
    }

    updateGameState = gameState => {
        this.setState({game: gameState})
    };

    updateGameRound = round => {
        this.setState({round: round})
    };

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
                            <div className={this.state.game === "" ? "" : "hidden"}>
                                <Welcome />
                                <CreateGame updateGameState={this.updateGameState}/>
                            </div>
                            <div className={this.state.game === "created" ? "" : "hidden"}>
                                <StartGame updateGameState={this.updateGameState}/>
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
                    {/*  <Buttons />*/}
                    {/*  <section className="section">*/}
                    {/*    <Container>*/}
                    {/*      <CustomControls />*/}
                    {/*      <Menus />*/}
                    {/*    </Container>*/}
                    {/*  </section>*/}
                    {/*  <Navbars />*/}
                    {/*  <section className="section section-components">*/}
                    {/*    <Container>*/}
                    {/*      <Tabs />*/}
                    {/*      <Row className="row-grid justify-content-between align-items-center mt-lg">*/}
                    {/*        <Progress />*/}
                    {/*        <Pagination />*/}
                    {/*      </Row>*/}
                    {/*      <Row className="row-grid justify-content-between">*/}
                    {/*        <Pills />*/}
                    {/*        <Labels />*/}
                    {/*      </Row>*/}
                    {/*      <Alerts />*/}
                    {/*      <Typography />*/}
                    {/*      <Modals />*/}
                    {/*      <Datepicker />*/}
                    {/*      <TooltipPopover />*/}
                    {/*    </Container>*/}
                    {/*  </section>*/}
                    {/*  <Carousel />*/}
                    {/*  <Icons />*/}
                    {/*  /!*<Login />*!/*/}
                    {/*  <Download />*/}
                </main>
                {/*<CardsFooter />*/}
            </>
        );
    }
}

export default Index;
