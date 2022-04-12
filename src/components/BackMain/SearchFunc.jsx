import React from "react";
import { FormControl, InputGroup, Button } from "react-bootstrap";
import "./app.css";
export default function JumbotronExample() {
  return (
    <div className="back">
      <InputGroup className="mb-3 inputs">
        <FormControl
          placeholder="Food"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button variant="success">Search</Button>{" "}
      </InputGroup>
    </div>
  );
}
