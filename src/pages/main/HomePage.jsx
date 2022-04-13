import { React, useEffect, useContext } from "react";
import "./style.css";
import Jumbo from "../../components/BackMain/SearchFunc";
// import Api from "../../api.js";
import axios from "axios";
import { MyContext } from "../../context";
import AllMeals from "../../components/Meals/Meals";
export default function HomePage() {
  const { meals, setMeals } = useContext(MyContext);
  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=salad`)
      .then(({ data }) => setMeals(data.meals));
  }, []);
  return (
    <>
      <Jumbo />
      <AllMeals meals={meals} />
    </>
  );
}
