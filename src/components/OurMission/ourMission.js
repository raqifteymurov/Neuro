import React from "react";
import "./ourMission.css";
import { Col, Row } from "reactstrap";
import rectangle6 from "../../assets/Rectangle6.png"
export default function ourMission() {
  return (
    <div className="ourMission d-flex align-items-center">
        <Row className="w-100">
        <Col md={6} xs={7}>
        <div>
            <img src={rectangle6} alt="" style={{width:'100%'}} />
         </div>
        </Col>
        <Col xs={5}className="offset-md-1 d-flex flex-column justify-content-center align-items-center" >
            <div className="w-100">
            <h1 className="w-100">Our Mission</h1>
            <div className="westarted"><p className="w-100 ">We started Neuro out of a desire to do more and become the best versions of ourselves.</p></div>
            <div><a className="w-100" href="#">Our story</a></div>
            </div>
        </Col>
      </Row>
    </div>
  );
}
