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

// reactstrap components
import {Container, Row, Col} from "reactstrap";

class Hero extends React.Component {
    render() {
        return (
            <>
                <Container className="shape-container d-flex align-items-center section-hero-welcome">
                    <div className="col px-0">
                        <Row className="align-items-center justify-content-center">
                            <Col className="text-center" lg="6" md="6">
                                <h2 className="text-white welcome-header">
                                    Welcome to Crockery!
                                </h2>
                                <p className="lead text-white">
                                    A game where a little white lie wins big and the bigger the crock, the better.
                                </p>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </>
        );
    }
}

export default Hero;
