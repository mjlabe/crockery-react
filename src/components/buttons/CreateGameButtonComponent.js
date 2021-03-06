import React from "react";
import {Button} from "reactstrap";

class CreateGameButtonComponent extends React.Component {
    // get state and hide if game created

    render() {
        return (
            <>
                <Button
                    className="btn-theme btn-icon mb-3 mb-sm-0"
                    size="lg"
                    onClick={this.props.onClick}
                >
                        <span className="btn-inner--icon mr-1">
                          <i className="fa fa-plus"/>
                        </span>
                    <span className="btn-inner--text">Create Game</span>
                </Button>{" "}
            </>
        );
    }
}

export default CreateGameButtonComponent;
