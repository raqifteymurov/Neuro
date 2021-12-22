import React from "react";
import "./energyFocus.css";
import frame3 from "../../assets/Frame (3).png";
import frame8 from "../../assets/Frame8.png";
import frame5 from "../../assets/Frame (5).png";
import frame6 from "../../assets/Frame (6).png";

import { Row, Col, Container, Button } from "reactstrap";
export default function energyFocus() {
  return (
    <div className="energyFocus">
      <img src={frame3} alt="" className="w-100" />
      <div className="backimage d-flex flex-wrap ">
        <Container>
          <Row className="d-flex  align-items-center  justify-content-center ">
            <Col md={6} xs={12} className="d-flex justify-content-center">
              <img
                src={frame5}
                alt=""
                style={{ width: "100%", marginTop: "-128px" }}
              />
            </Col>

            <Col
              xs={12}
              md={6}
              className="d-flex flex-column align-items-center "
            >
              <div>
                <h1 style={{ color: "#F6F9E5" }} className="mb-4 energyH w-100">
                  Energy & Focus
                </h1>
              </div>
              <div>
                <p className="mb-4  " style={{ fontSize: "14px" ,textAlign:'center' }}>
                  Specially formulated with natural caffeine, L-
                
                  theanine and B-vitamins to sustain the mental
                  endurance necessary to maintain your focus.*
                </p>
              </div>

              <div className="mb-4" style={{ marginLeft: "232px" }}>
                <img src={frame6} alt="" />
              </div>

             <div className="w-100 d-flex justify-content-center shopbtn "><Button className="mb-5 fw-bold btn btn-secondary" style={{width:'100%'}}>Shop</Button></div> 
            </Col>
          </Row>
        </Container>
        <div className=" w-100">
          <img src={frame8} alt="" className="w-100"/>
        </div>
        <br/>
      </div>
  
    </div>
   
  );
}
