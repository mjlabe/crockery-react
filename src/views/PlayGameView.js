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

// index page sections
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
                <h1>HI</h1>

            </>
        );
    }
}

export default Index;
