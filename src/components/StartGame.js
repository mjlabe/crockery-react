import {Col, Row} from "reactstrap";
import JoinCode from "./JoinCode";
import React from "react";
import StartGameButton from "./buttons/StartGameButton";

class StartGame extends React.Component {
    // get state and hide if game created

    render() {
        return (
            <div className="btn-wrapper mt-3" id="game-state">
                <div className="col px-0">
                    <Row className="align-items-center justify-content-center">
                        <Col className="text-center" lg="6">
                            <JoinCode/>
                            <StartGameButton updateState={this.props.updateState}/>{" "}
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default StartGame;
