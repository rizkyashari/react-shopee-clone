import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

function FlashSaleTimer() {
  return (
    <div>
        <Container className='container-fluid'>
            <Row>
                <Col style={{paddingRight: "0", paddingLeft: "0"}}>
                    <Card bg="light" border='0'>
                        <Card.Body style={{borderRadius: "0"}}>
                            <p className="card-title d-flex justify-content-center">00.00</p>
                            <p className="card-subtitle d-flex justify-content-center">Sedang Berjalan</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col style={{paddingRight: "0", paddingLeft: "0"}}>
                    <Card bg="light" border="0">
                        <Card.Body style={{borderRadius: "0"}}>
                            <p className="card-title d-flex justify-content-center">12.00</p>
                            <p className="card-subtitle d-flex justify-content-center">Akan Datang</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col style={{paddingRight: "0", paddingLeft: "0"}}>
                    <Card bg="light" border="0">
                        <Card.Body style={{borderRadius: "0"}}>
                            <p className="card-title d-flex justify-content-center">18.00</p>
                            <p className="card-subtitle d-flex justify-content-center">Akan Datang</p>
                        </Card.Body>
                    </Card>
                 </Col>
            </Row>
            <Row>
                <Col style={{paddingRight: "0", paddingLeft: "0"}}>
                    <img src="https://cf.shopee.co.id/file/e672f38612d2ce30f37595e0a0818912" alt=""/>
                </Col>
            </Row>
            <Container fluid="md">
            <Row>
                <Col className='d-flex justify-content-end mt-2 mb-2'>BERAKHIR DALAM: <strong>01:30:00</strong></Col>
            </Row>
            </Container>   
        </Container>   
    </div>
  )
}

export default FlashSaleTimer