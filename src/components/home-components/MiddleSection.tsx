import React from "react";
import FlashSaleCard from '../card/FlashSaleCard'
import jeans from "./assets/jeans.jpg";
import sabun from "./assets/lifeboy.jpeg";
import hoodie from "./assets/hoodie.jpeg";
import airpod from "./assets/airpod.jpg";
import kabel from "./assets/kabel.jpg";
import tws from "./assets/tws.jpg"
import { Row } from "react-bootstrap";
import './MiddleSection.css'
import { IFlashSaleCard } from "../../interface";

let flashSaleData: IFlashSaleCard[] = [
    { price: "147000", image: jeans },
    { price: "150000", image: sabun },
    { price: "117000", image: hoodie },
    { price: "102400", image: airpod},
    { price: "1000", image: kabel },
    { price: "5000", image: tws },
  ];

function MiddleSection() {
  return (
    <div className="container-fluid mb-2 horizontal-scrollable">
      <h3 className="fw-bold" style={{marginLeft: "1rem"}}>Flash Sale</h3>
      <Row className="row-cols-10 mx-auto mt-1 d-flex flex-row flex-nowrap">
        {flashSaleData.map((item) => (
            <FlashSaleCard price={item.price} image={item.image}/>
        )
        )}
      </Row>
    </div>
  );
}

export default MiddleSection;