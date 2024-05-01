import React from "react";
import { Button } from "react-bootstrap";

const PrimaryBtn = ({ btnText, onClick }) => {
  return (
    <Button onClick={onClick} variant="outline-light">
      {btnText}
    </Button>
  );
};

export default PrimaryBtn;
