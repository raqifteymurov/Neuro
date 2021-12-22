import React from "react";
import "./Healthinyourpocket.css";
// import background from "../../assets/Rectangle.png";
import { Container, Button, Row, Col } from "reactstrap";
export default function Healthinyourpocket() {
  return (
    <div className="Healthinyourpocket">
      <div className="img1">
        <Container>
          <div className="cardd" style={{marginTop:'-164px'}}>
            <b>
              <h1>
                Health in
                <br />
                your pocket.
              </h1>
            </b>
            <p className="mt-3">
              Functional gum and mints to <br /> energize, calm and focus you 
              <br />
              in the moment.
            </p>
            <form  >
               
              <Button className="mt-2 btn0 form-control text-light fw-bold">
               SHOP
              </Button>
              
            </form>
          </div>
        </Container>

        <div className="gotit d-flex w-100 justify-content-between mt-sm-5 mt-3">
          <Row className="w-100">
            <Col xs={12} md={8}>
              <div className="d-flex justify-content-start h-100 w-100 align-items-center cookies ">
                <p>
                  We use cookies to enhance your experience on our website. By
                  using our website, you agree to our privacy policy.
                </p>
              </div>
            </Col>
            <Col
              xs={6}
              md={2}
              className="d-flex justify-content-center align-items-center Learn"
            >
              <div>
                <a href="#" className="w-100">
                  Learn more
                </a>
              </div>
            </Col>
            <Col xs={6} md={2}>
              <div className="d-flex h-100 w-100 justify-content-center align-items-center ms-2 Gotit  ">
                <Button className="btn bg-light text-dark " id="gotitbtn"  >Got it</Button>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
