import React from "react";
import { Card, Col } from "react-bootstrap";
import { ISmallCard } from "../../interface";

import "./SmallCard.css";

const SmallCard: React.FC<ISmallCard> = ({ title, icons }) => {
  return (
    <Col>
      <Card border="0">
        <div className="d-flex justify-content-center">
          <Card className="text-center border-1 p-2 w-50 icon-card" style={{margin: "1rem", marginBottom: "0"}}>
            <i className={icons}></i>
          </Card>
        </div>
        <div className="card-body text-center">
          <p className="card-title">{title}</p>
        </div>
      </Card>
    </Col>
  );
};

export default SmallCard;