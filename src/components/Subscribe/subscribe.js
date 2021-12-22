import React from 'react'
import './subscribe.css'
import rectangle5 from "../../assets/Rectangle (5).png"
import { Container,Row,Col,Button } from 'reactstrap'
export default function subscribe() {
    return (
        <div className="subscribe d-flex justify-content-center align-items-center">
        <Container >
          <Row className="rewerse">
            <Col md={6} xs={12} className="d-flex justify-content-end ">
              <div>
                <img src={rectangle5} alt="" style={{ width: "100%" }} />
              </div>
            </Col>
            <Col
              md={6}
              xs={12}
              className="d-flex   justify-content-center"
            >
              <div className=" d-flex flex-column justify-content-center">
                <h1 className="w-100 ideal mb-3">In the Zone.Every Day.</h1>
                <div  className='neverrun' >
                  <p className="somedays mb-4 w-100" style={{ color: "black"  }}>
                  Never run out of Neuro with a monthly  subscription. Members get 10%
                   off and free shipping straight to your door.
                  </p>
                </div>
                <div className="w-100  mb-1">  
                  <Button id="btn3" className="w-100  ">
                    Subscribe
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
          <br/>  <br/>   
        </Container>
       
      </div>
    )
}
