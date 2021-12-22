import React from "react";
import {
  Col,
  Container,
  Row,
  Accordion,
  AccordionHeader,
  AccordionItem

} from "reactstrap";
import "./Header.css";
import frame from "../../assets/Frame.png";
import group from "../../assets/Group.png";

export default function Header() {
  return (
    <div className="Header d-flex  align-items-center">
      <Container>
        <Row className="d-flex justify-content-center g-2">
          <Col className="shopp">
            <div className="shop d-flex  ">
              <a href="#" className="pe-sm-4 pe-3">
                Shop
              </a>

              <a href="#" className=" ">
                About
              </a>
            </div>
          </Col>

          <Col className="neuroo">
            <div className="neuro d-flex   text-sm-center ">
              <div>
                <img src={frame} alt="" style={{ width: "100%" }} />
              </div>
            </div>
          </Col>

          <Col className="sign-inn ">
            <div className="sign-in d-flex   ">
              <a href="#" className="pe-lg-4 pe-3">
                Subscription
              </a>

              <a href="#" className="pe-lg-4 pe-1 sign-innn me-sm-2">
                Sign in
              </a>

              <div>
                <img
                  src={group}
                  alt=""
                  className=""
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
       
    </div>
  );
}
