import React from "react";
import { Button } from "react-bootstrap";

const PrimaryBtn = ({ btnText, onClick, onKeyDown }) => {
  return (
    <Button onClick={onClick} variant="info">
      {btnText}
    </Button>
  );
};

export default PrimaryBtn;
