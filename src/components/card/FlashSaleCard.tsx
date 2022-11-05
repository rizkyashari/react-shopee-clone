import React from "react";
import { Card, Col } from "react-bootstrap";
import { IFlashSaleCard } from "../../interface";
import "./FlashSaleCard.css";

const FlashSaleCard: React.FC<IFlashSaleCard> = ({ image, price }) => {
  return (
    <Col className="col-xs-4">
      <Card border="0">
        <img src={image} className="image-flash-sale rounded float-start" alt=""/>
        <Card.Body className="text-center">
          <p className="card-title" id="price-card">
            Rp. <span className="fs-5"> {price}</span>
          </p>
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              aria-label="Example 20px high"
            ></div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default FlashSaleCard;