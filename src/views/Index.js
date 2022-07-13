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
            game: "",
            round: 0
        };
    }

    createGame() {
        this.setState({game: 'created'})
        // call api and get code
    }


    startGame() {
        this.setState({game: 'started'})
        // call api and start game
    }

    render() {
        return (
            <>
                <NavBar/>
                <main ref="main">
                    <Welcome />
                    <CreateGame props={this}/>
                    <div
                        className={this.state.game !== "created" ? "hidden" : ""}
                        onClick={() => this.startGame()}
                    >
                        <StartGame />
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
