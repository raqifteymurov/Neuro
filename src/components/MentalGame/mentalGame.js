import React from "react";
import "./mentalGame.css";
import rectangle1 from "../../assets/Rectangle1.png";
import rectangle11 from "../../assets/Rectangle (11).png"
import rectangle10 from "../../assets/Rectangle (10).png"
import rectangle12 from "../../assets/Rectangle12.png"
import { Row, Col, Button } from "reactstrap";
export default function mentalGame(){
  return (
    <div className="mentalGame d-flex flex-column justify-content-center align-items-center">
      <div className="hh mt-5">
        <h1 style={{ color: "#000000" }}>We get the mental game</h1>
      </div>
      <div className="pp mt-3">
        <p style={{ color: "#000000" }} className="w-100">
          That’s why we create products to help shift your mindset with ease and
          <br /> flow. Our functional gum and mints are shortcuts to the ideal
          state of
          <br /> mind, delivering just the right amount of what you need to
          energize, <br /> calm and focus your mind in the moment.
        </p>
      </div>

      <div className="px-2 mt-2  ">
        <img src={rectangle1} alt="" className="w-100" />
      </div>

      <div className="mt-5">
        <h1 style={{ color: "#000000", fontSize: "font-size: 40px" }}>
          Shop by function
        </h1>
      </div>
      <div className="mt-1 mb-3">
        <p style={{ color: "#000000" }}>
          Find the right products for any situation.
        </p>
      </div>

      <div className="d-flex justify-content-center mt-5">
        <Row className="g-4 px-1">
          <Col className="  image1" md={4} sm={6} xs={12}>
            <div className="mentalblock d-flex flex-column justify-content-center " id="mentalblock1">
             
              {/* <img src={frame4} alt="" className="w-100" />  */}
              <div className="d-flex justify-content-center mb-4 "><img src={rectangle10} alt=""/></div>
              <div  className="d-flex justify-content-center mb-3 "><p className="">Energy & Focus</p></div>
              <div  className="d-flex justify-content-center ">
                <Button className="mentalbtn">SHOP NOW</Button>
              </div>

            </div>
          </Col>

          <Col className=" image2" md={4} sm={6} xs={12}>
          <div className="mentalblock d-flex flex-column justify-content-center " id="mentalblock2">
             
             {/* <img src={frame4} alt="" className="w-100" />  */}
             <div className="d-flex justify-content-center mb-4 "><img src={rectangle11} alt=""/></div>
             <div  className="d-flex justify-content-center mb-3 "><p className="">Calm & Clarity</p></div>
             <div  className="d-flex justify-content-center ">
               <Button className="mentalbtn">SHOP NOW</Button>
             </div>

           </div>
          </Col>

          <Col className="d-flex justify-content-center" md={4}>
          <div className="mentalblock d-flex flex-column justify-content-center " id="mentalblock3">
             
              {/* <img src={frame4} alt="" className="w-100" />  */}
              <div className="d-flex justify-content-center mb-4 "> <img src={rectangle12} alt=""/></div>
              <div  className="d-flex justify-content-center mb-3 "><p className="">IDEAL STATE</p></div>
              <div  className="d-flex justify-content-center ">
                <Button className="mentalbtn">SHOP NOW</Button>
              </div>

            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
