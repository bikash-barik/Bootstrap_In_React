import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";


export default class GridSystem extends Component {
  render() {
    return (
      <>
        {/* jsx code  */}
        <div className="container mt-2">
          <div className="row border border-1 border-danger">
            <div className="col-6 border border-1 border-danger">Column</div>
            <div className="col-4 border border-1 border-danger">Column</div>
            <div className="col-2 border border-1 border-danger">Column</div>
          </div>
        </div>
        {/* End of jsx */}

        {/* react component */}
        <Container className="mt-2">
          <Row className="border border-2 border-primary">
            <Col sm={8} className="border border-2 border-primary">1 of 2</Col>
            <Col sm={4} className="border border-2 border-primary">2 of 2</Col>
          </Row>
          <Row className="border border-2 border-primary">
            <Col className="border border-2 border-primary">1 of 3</Col>
            <Col className="border border-2 border-primary">2 of 3</Col>
            <Col className="border border-2 border-primary">3 of 3</Col>
          </Row>
        </Container>

        {/*end react component */}
      </>
    );
  }
}
