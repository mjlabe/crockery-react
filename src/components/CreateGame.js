import {Col, Row} from "reactstrap";
import CreateGameButton from "./buttons/CreateGameButton";
import React from "react";

class CreateGame extends React.Component {
    // get state and hide if game created

    render() {
        return (
            <div className="btn-wrapper mt-5" id="game-state">
                <div className="col px-0">
                    <Row className="align-items-center justify-content-center">
                        <Col className="text-center" lg="6" md="6">
                            <CreateGameButton />{" "}
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default CreateGame;
