import React from 'react'
import { Container, Row, Col, ProgressBar, Button } from 'react-bootstrap'
import { IFlashSaleItems } from '../../interface'

const FlashSaleItem: React.FC<IFlashSaleItems> = ({ image, name, undiscounted, discounted }) => {
  return (
    <Container style={{backgroundColor: "white"}}>
            <Row>
                <Col className='d-flex'>
                    <Col className="flex-shrink-0">
                        <img src={image} alt="..." height="200" width="auto" style={{padding: "2rem"}}/>
                    </Col>
                    <Col className='md-8'>
                        <Col>
                            <h2 className='fw-bold' style={{paddingBottom: "2rem", paddingTop: "2rem"}}>{name}</h2>
                        </Col>
                        <Row style={{paddingBottom: "2rem"}}>
                            <s>Rp{undiscounted}</s>
                            <Col>
                                <h4 className='fw-bold' style={{color: "orangered"}}>Rp{discounted}</h4>
                                <ProgressBar variant="danger" now={30}/>
                            </Col>
                            <Col className='d-flex justify-content-end'>
                                <Button variant="danger">Beli</Button>
                            </Col>
                        </Row>
                    </Col>
                </Col>
            </Row>
    </Container>
  )
}

export default FlashSaleItem