import React from "react";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";

export default function CardElement({ variant, size, title, children }) {
  let bg = "light";
  let text = "dark";
  let width = "100%";
  let height = "100%";

  if (variant === "title-card") {
    bg = "primary";
    text = "white";
  }

  if (size === "thumbnail") {
    width = "18rem";
    height = "9rem";
  }

  return (
    <Card bg={bg} style={{ width, height }} text={text}>
      <Card.Body>
        {title ? <Card.Title>{title}</Card.Title> : null}
        {children}
      </Card.Body>
    </Card>
  );
}

CardElement.propTypes = {
  bg: PropTypes.oneOf(["title-card", "default"]),
  size: PropTypes.oneOf(["thumbnail", "full"]),
};
