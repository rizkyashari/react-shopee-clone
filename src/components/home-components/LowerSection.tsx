import React from "react";
import jeans from "./assets/jeans.jpg";
import sabun from "./assets/lifeboy.jpeg";
import hoodie from "./assets/hoodie.jpeg";
import airpod from "./assets/airpod.jpg";
import kabel from "./assets/kabel.jpg";
import tws from "./assets/tws.jpg"
import { Row } from "react-bootstrap";
import './MiddleSection.css'
import { ITrendyProductsCard } from "../../interface";
import TrendyProductsCard from "../card/TrendyProductsCard";

let trendyProductsData: ITrendyProductsCard[] = [
    { title: "Airpod", sale: "102", image: airpod},
    { title: "Kabel", sale: "100", image: kabel },
    { title: "TWS", sale: "50", image: tws },
    { title: "Jeans", sale: "147", image: jeans },
    { title: "Sabun", sale: "150", image: sabun },
    { title: "Hoodie", sale: '234', image: hoodie },
  ];

function LowerSection() {
  return (
    <div className="container-fluid mb-2 horizontal-scrollable">
      <h3 className="fw-bold" style={{marginLeft: "1rem"}}>Produk Terlaris</h3>
      <Row className="row-cols-10 mx-auto mt-1 d-flex flex-row flex-nowrap">
        {trendyProductsData.map((item) => (
            <TrendyProductsCard title={item.title} image={item.image} sale={item.sale}/>
        )
        )}
      </Row>
    </div>
  );
}

export default LowerSection;