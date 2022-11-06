import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function FlashSaleHeader() {
  return (
    <Container className="sticky-top" style={{backgroundColor: "white", padding: "1rem"}}>
        <Container className='container-fluid mt-3'>
            <Row>
                <Col>
                <Link to="/home">
                    <a className="btn btn-danger" role="button">Back</a>
                </Link>
                </Col>
                <Col className='d-flex justify-content-center fw-bold fs-2'>Flash Sale</Col>
                <Col></Col>
            </Row>
       </Container>
    </Container>
  )
}

export default FlashSaleHeader