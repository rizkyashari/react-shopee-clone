import React from "react";
import { Row } from "react-bootstrap";
import SmallCard from '../card/SmallCard'

let iconsData: { icons: string; title: string }[] = [
  { icons: "bi bi-wallet2", title: "Gratis Ongkir" },
  { icons: "bi bi-phone", title: "Pulsa Tagihan" },
  { icons: "bi bi-bag-check", title: "Shopee Mall" },
  { icons: "bi bi-geo-alt", title: "Shopee Pay Sekitar" },
  { icons: "bi bi-joystick", title: "Shopee Games" },
  { icons: "bi bi-activity", title: "Shopee Food" },
  { icons: "bi bi-123", title: "Shopee Lokal" },
  { icons: "bi bi-wallet-fill", title: "Spay Later" },
];

function UpperSection() {
  return (
    <div className="container-fluid mb-2 horizontal-scrollable">
      <Row className="row-cols-10 mx-auto mt-1 d-flex flex-row flex-nowrap">
        {iconsData.map((item) => (
            <SmallCard icons={item.icons} title={item.title}/>
        )
        )}
      </Row>
    </div>
  );
}

export default UpperSection;