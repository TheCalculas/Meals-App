import { React, useEffect, useState } from "react";
import Jumbo from "../../components/BackMain/SearchFunc";
import axios from "axios";
import AllMeals from "../../components/Meals/Meals";
export default function HomePage() {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=pasta")
      .then(({ data }) => setMeals(data.meals));
  }, []);
  return (
    <>
      <Jumbo />
      <AllMeals meals={meals} />
    </>
  );
}
