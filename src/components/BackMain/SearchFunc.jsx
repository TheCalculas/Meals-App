import axios from "axios";
import { React, useState, useContext } from "react";
import { FormControl, InputGroup, Button } from "react-bootstrap";
import { MyContext } from "../../context.js";
import "./style.css";
export default function JumbotronExample() {
  const [searchInput, setsearchInput] = useState("");
  const { setMeals } = useContext(MyContext);
  const handleSearch = () => {
    axios
      .get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`
      )
      .then(({ data }) => setMeals(data.meals));
  };
  return (
    <div className="back">
      <InputGroup className="mb-3 inputs">
        <FormControl
          className="write"
          placeholder="Food"
          value={searchInput}
          onChange={(event) => {
            setsearchInput(event.target.value);
          }}
        />
        <Button variant="success" className="write" onClick={handleSearch}>
          Search
        </Button>{" "}
      </InputGroup>
    </div>
  );
}
