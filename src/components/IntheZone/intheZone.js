import React from "react";
import { Button, Col, Container, Row } from "reactstrap";
import "./intheZone.css";
import rectangle4 from "../../assets/Rectangle4.png";
export default function intheZone() {
  return (
    <div className="intheZone  d-flex justify-content-center align-items-center">
      <Container >
        <Row className="rewerse">
          <Col md={6} xs={12} className="d-flex justify-content-start ">
            <div>
              <img src={rectangle4} alt="" style={{ width: "100%" }} />
            </div>
          </Col>
          <Col
            md={6}
            xs={12}
            className="d-flex   justify-content-center   "
          >
            <div className=" d-flex flex-column justify-content-center">
              <h1 className="w-100 ideal mb-3">The Ideal State</h1>
              <div  className="gettinginthezone">
                <p className="somedays mb-4 w-100" style={{ color: "black"  }}>
                  Some days, getting in the zone requires a 
                  boost – other days, we need to take it down a   notch.
                  Balance the ups and downs of your
                  
                  ambition with a combo pack of Energy & Focus  
                  and Calm & Clarity.
                </p>
              </div>
              <div className="w-100  mb-1 shopnowbtn">  
                <Button id="btn2" className="w-100">
                  shop now
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
