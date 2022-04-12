import React from "react";
import "./style.css";
import FoodCards from "../../components/FoodCard/Card";
// a func to iterate through all the meal array elements
function AllMeals({ meals }) {
  return (
    <div className="dish-container">
      {meals.map((dish) => (
        // <div key={dish.idMeal}>{dish.strMeal}</div>
        <FoodCards dishes={dish} />
      ))}
    </div>
  );
}

export default AllMeals;
