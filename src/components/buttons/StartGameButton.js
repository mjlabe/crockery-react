import React from "react";
import {Button} from "reactstrap";

class CreateGameButton extends React.Component {
    // get state and display if game created

    render() {
        return (
            <>
                <Button
                    className="btn-white btn-icon mb-3 mb-sm-0"
                    color="default"
                    size="lg"
                >
                        <span className="btn-inner--icon mr-1">
                          <i className="ni ni-button-play"/>
                        </span>
                    <span className="btn-inner--text">Start Game</span>
                </Button>{" "}
            </>
        );
    }
}

export default CreateGameButton;
