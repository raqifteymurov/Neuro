import React from "react";
import "./howWeDoIt.css";
import vector from "../../assets/Vector.png";
import { Row, Col, Container } from "reactstrap";
import rectangle1 from "../../assets/Rectangle (1).png";
export default function howWeDoIt() {
  return (
    <div className="howWeDoIt">
      <div className="vectorimage w-100">
        <img src={vector} alt="" className="w-100" />
      </div>
      <div className="backimageblue d-flex justify-content-center  ">
        <Container>
          <Row className="w-100">
            <Col
              xs={12}
              md={6}
              className="d-flex flex-column justify-content-center h-100"
            >
              <h1 className="w-100 h-100 howwedoith" style={{ color: "white" }}>
                There’s a science to the science.
              </h1>
              <div>
                <p className="w-100 h-100">
                  We have gone through dozens of formulations, processes and
                  tests to ensure each gum and mint we make delivers on our
                  promise of getting you in the right state at the right time.
                </p>
              </div>
              <div className="w-100 h-100 howwedoita">
                <a href="#">How we do it</a>
              </div>
            </Col>

            <Col xs={12} md={6}>
              <div className="petals h-100">
                <img src={rectangle1} alt=""/>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
