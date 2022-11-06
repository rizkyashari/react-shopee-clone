import React from 'react'
import jeans from "./assets/jeans.jpg";
import sabun from "./assets/lifeboy.jpeg";
import hoodie from "./assets/hoodie.jpeg";
import airpod from "./assets/airpod.jpg";
import kabel from "./assets/kabel.jpg";
import tws from "./assets/tws.jpg"
import { IFlashSaleItems } from '../../interface'
import { Container, Row } from 'react-bootstrap';
import FlashSaleItem from '../card/FlashSaleItem';

let itemsData: IFlashSaleItems[] = [
  { discounted: "7000", undiscounted: "147000", image: jeans, name: "Jeans" },
  { discounted: "12000", undiscounted: "123000", image: sabun, name: "Sabun" },
  { discounted: "14000", undiscounted: "120000", image: hoodie, name: "Hoodie" },
  { discounted: "24000", undiscounted: "210000", image: airpod, name: "Airpod" },
  { discounted: "34000", undiscounted: "100000", image: kabel, name: "Kabel" },
  { discounted: "12700", undiscounted: "300000", image: tws, name: "TWS" },
];

function FlashSaleItems() {
  return (
    <Container style={{backgroundColor: "white"}}>
      <Row>
        {itemsData.map((item) => (
            <FlashSaleItem image={item.image} name={item.name} discounted={item.discounted} undiscounted={item.undiscounted}/>
        )
        )}
      </Row>
    </Container>
  );
}

export default FlashSaleItems;