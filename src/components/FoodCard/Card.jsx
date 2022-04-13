import React from "react";

import { Card } from "react-bootstrap";
import MealModelComponent from "../MealModal";
function FCard({ dishes }) {
  return (
    <div key={dishes.idMeal} className="card1">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={dishes.strMealThumb} />
        <Card.Body>
          <Card.Title>{dishes.strMeal}</Card.Title>
          <MealModelComponent dish={dishes} />
        </Card.Body>
      </Card>
    </div>
  );
}

export default FCard;
