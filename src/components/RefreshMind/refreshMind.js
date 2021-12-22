import React from "react";
import { Button, Container } from "reactstrap";
import "./refreshMind.css";
export default function refreshMind() {
  return (
    <div className="refreshMind d-flex flex-column justify-content-center  ">
      <Container>
        <div className="getneuro">
          <div>
           
            <h1 className="w-100 mb-4 ">Refresh your state of mind.</h1>
          </div>
          <div className="w-100 btn5">
            <Button id="btn5" className="fw-bold">Get Neuro</Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
