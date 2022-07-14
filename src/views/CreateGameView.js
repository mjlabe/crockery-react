import React from 'react';
import {Col, Container, Row} from "reactstrap";

// index page sections
import WelcomeComponent from "../components/WelcomeComponent.js";
import JoinCodeComponent from "../components/JoinCodeComponent";

import CreateGameButtonComponent from "../components/buttons/CreateGameButtonComponent";
import StartGameButtonComponent from "../components/buttons/StartGameButtonComponent";


class CreateGameView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            game: "",
            round: 0,
            joinCode: "",
        };
    }

    createGame = () => {
        // get game join code from api
        let code = "88ef87f"
        this.setState({game: "created", joinCode: code})
    }

    startGame = () => {
        // get question from api
        this.props.setGameData({game: "started", round: 1, joinCode: this.state.joinCode})
    }

    render() {
        return (
            <>
                <Container className="shape-container d-flex align-items-center section-hero-welcome">
                    <div className="col px-0">
                        <Row className="align-items-center justify-content-center">
                            <Col className="text-center" lg="6">
                                {(this.state.game === "" ?
                                    <WelcomeComponent/> :
                                    <JoinCodeComponent joinCode={this.state.joinCode}/>)}
                            </Col>
                        </Row>
                    </div>
                </Container>
                <div className="btn-wrapper">
                    <div className="col px-0">
                        <Row className="align-items-center justify-content-center">
                            <Col className="text-center">
                                {(this.state.game === "" ?
                                    <CreateGameButtonComponent onClick={this.createGame}/> :
                                    <StartGameButtonComponent onClick={this.startGame}/>)}
                            </Col>
                        </Row>
                    </div>
                </div>
            </>
        );
    }
}

export default CreateGameView;
