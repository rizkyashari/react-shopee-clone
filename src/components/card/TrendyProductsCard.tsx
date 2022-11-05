import React from "react";
import { Card, Col } from "react-bootstrap";
import { ITrendyProductsCard } from "../../interface";
import './TrendyProductsCard.css'


const TrendyProductsCard: React.FC<ITrendyProductsCard> = ({ image, sale, title }) => {
  return (
    <Col>
      <Card bg="light" border="0">
        <img src={image} className="image-product rounded float-start" alt=""/>
        <Card.Body>
          <p className="card-title">{title}</p>
          <p className="card-subtitle">{sale}Rb+ terjual</p>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default TrendyProductsCard;