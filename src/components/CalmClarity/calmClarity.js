import React from 'react'
import { Container,Row,Col, Button } from 'reactstrap'
import './calmClarity.css'
import frame10 from "../../assets/Frame10.png"
import frame9 from "../../assets/Frame (9).png"
export default function calmClarity() {
    return (
        <div className='calmClarity'>
        
        <Container>
            <Row className='d-flex align-items-center reverse'>
                <Col xs={12} md={6} className='calm'>
               <div style={{color:'#C47B59' }} className='mb-4 d-flex justify-content-center'> <h1>Calm & Clarity</h1></div>
             <div><p style={{color:'#C47B59',textAlign:'center'}} className='mb-4 d-flex justify-content-center'>Expertly developed with GABA, vitamin D3, and   L-theanine to
                 optimize composure and clarity of   mind.*</p></div> 
                 <div className='ginger  w-100 d-flex justify-content-center'><img src={frame10} alt='' className='mb-4 ' style={{marginLeft:'16rem'}}/></div>
               <div className='d-flex justify-content-center shopbtncalm '> <Button id='btn1 ' className='fw-bold' style={{width:'100%'}} >Shop</Button></div> 
                </Col>

                 <Col xs={12} md={6}>
                <div> <img src={frame9} alt='' style={{width:'100%'}}/></div>
                </Col>
            </Row>
        </Container>
        <br/> <br/>
        <br/> <br/>  
        </div>
         
    )
}
