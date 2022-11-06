import React from 'react'
import { Col, Container, Row, Card } from 'react-bootstrap'
import FlashSaleHeader from '../components/flash-sale/FlashSaleHeader'
import FlashSaleItems from '../components/flash-sale/FlashSaleItems'
import FlashSaleTimer from '../components/flash-sale/FlashSaleTimer'
import './styles/index.css'

function FlashSale() {
  return (
    <div>
       <FlashSaleHeader />
       <FlashSaleTimer />
       <FlashSaleItems/>
    </div>
  )
}

export default FlashSale