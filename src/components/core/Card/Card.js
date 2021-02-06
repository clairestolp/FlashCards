import React from "react";
import Card from "react-bootstrap/Card";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import PropTypes from "prop-types";
import parse from "react-html-parser";
import "./styles.scss";

export default function CardElement({
  variant,
  size,
  title,
  children,
  htmlContent,
}) {
  let bg = "light";
  let text = "dark";
  let width = "100%";
  let height = "100%";

  if (variant === "title-card") {
    bg = "primary";
    text = "white";
  }

  return (
    <ThemeProvider prefixes={{ card: "cust-card" }}>
      <Card bg={bg} style={{ width, height }} text={text}>
        <Card.Body>
          {title ? <Card.Title>{title}</Card.Title> : null}
          {htmlContent ? parse(htmlContent) : { children }}
        </Card.Body>
      </Card>
    </ThemeProvider>
  );
}

CardElement.propTypes = {
  bg: PropTypes.oneOf(["title-card", "default"]),
  size: PropTypes.oneOf(["thumbnail", "full"]),
};
