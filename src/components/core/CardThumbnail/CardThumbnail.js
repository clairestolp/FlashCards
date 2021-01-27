import React from "react";
import Card from "react-bootstrap/Card";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import PropTypes from "prop-types";
import "./styles.scss";

export default function CardThumbnail({ variant, title }) {
  let bg = "light";
  let text = "dark";

  if (variant === "title-card") {
    bg = "primary";
    text = "white";
  }

  return (
    <ThemeProvider
      prefixes={{ card: "cust-card", "card-body": "cust-card-body" }}
    >
      <Card bg={bg} text={text}>
        <Card.Body>{title ? <h3>{title}</h3> : null}</Card.Body>
      </Card>
    </ThemeProvider>
  );
}

CardThumbnail.propTypes = {
  bg: PropTypes.oneOf(["title-card", "default"]),
  size: PropTypes.oneOf(["thumbnail", "full"]),
};
