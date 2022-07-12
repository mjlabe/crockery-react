import React from "react";
import {Button} from "reactstrap";

class CreateGameButton extends React.Component {
    // get state and hide if game created

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.state = {
            game: "",
            round: 0
        };
    }

    onClick(e) {
        console.log(this.state)
        // here you know which component is that, so you can call parent method
        this.setState({game: "started"});

    }

    render() {
        return (
            <>
                <Button
                    onClick={this.onClick}
                    className="btn-theme btn-icon mb-3 mb-sm-0"
                    size="lg"
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

export default CreateGameButton;
