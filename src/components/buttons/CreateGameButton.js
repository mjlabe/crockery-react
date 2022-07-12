import React from "react";
import {Button} from "reactstrap";
import JoinCode from "../JoinCode";

class CreateGameButton extends React.Component {
    // get state and hide if game created

    render() {
        return (
            <>
                <div className="btn-wrapper mt-5" id="game-state">
                    <Button
                        className="btn-white btn-icon mb-3 mb-sm-0"
                        color="default"
                        href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page"
                        size="lg"
                    >
                        <span className="btn-inner--icon mr-1">
                          <i className="fa fa-plus"/>
                        </span>
                        <span className="btn-inner--text">Create Game</span>
                    </Button>{" "}
                    <JoinCode></JoinCode>
                </div>
            </>
        );
    }
}

export default CreateGameButton;
