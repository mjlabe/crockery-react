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
// nodejs library that concatenates classes
// reactstrap components
import {
  Container,
  Row,
  Col
} from "reactstrap";

class Inputs extends React.Component {
  state = {};
  // get state and display if game created
  render() {
    return (
      <>
          <Container className="mb-5">
            <Row>
              <Col>
                <p className="text-white text-center font-weight-bolder pt-md-5">
                  Send this code to others and they can join the game.
                </p>
                <h2 className="text-white border border-light p-3 text-center">
                  H67DB1
                </h2>
              </Col>
            </Row>
          </Container>
      </>
    );
  }
}

export default Inputs;
