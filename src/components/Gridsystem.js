import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

export default class Gridsystem extends Component {
  render() {
    return (
      <>
        <h1 className="text-center">Grid system</h1>
        <Container className="mt">
          <Row className="border border-primary">
            <Col xs={8} className="border border-primary">
              1 of 2
            </Col>
            <Col xs={4} className=" border border-primary">
              2 of 2
            </Col>
          </Row>
          <Row className="border border-primary">
            <Col className="border border-primary">1 of 3</Col>
            <Col className="border border-primary">2 of 3</Col>
            <Col className="border border-primary">3 of 3</Col>
          </Row>
        </Container>
        {/* //jsx */}
        <div class="container mt">
          <div class="row">
            <div class="col-6 border">Column</div>
            <div class="col border">Column</div>
            <div class="col border">Column</div>
          </div>
        </div>
        {/* //Three columns */}
        <div class="grid">
            {/* <div className='row'> */}
          <div class="g-col-6 border">.g-col-4</div>
          <div class="g-col-2 border">.g-col-4</div>
          <div class="g-col-4 border">.g-col-4</div>
          {/* </div> */}
        </div>

        <div class="grid d-flex p-2 bd-highlight">
  <div className='border w-25 p-3'>1</div>
  <div className="w-auto p-3 bg-primary m-2">1</div>
  <div className="w-auto p-3 bg-primary m-2">1</div>
  <div className="w-auto p-3 bg-primary m-2">1</div>
  <div className="w-auto p-3 bg-primary m-2">1</div>
  <div className="w-auto p-3 bg-primary m-2">1</div>
  <div className="w-auto p-3 bg-primary m-2">1</div>
  <div className="w-auto p-3 bg-primary m-2">1</div>
  <div className="w-auto p-3 bg-primary m-2">1</div>
  <div className="w-auto p-3 bg-primary m-2">1</div>
  <div className="w-auto p-3 bg-primary m-2">1</div>
  <div className="w-auto p-3 bg-primary m-2">1</div>
</div>
      </>
    );
  }
}
