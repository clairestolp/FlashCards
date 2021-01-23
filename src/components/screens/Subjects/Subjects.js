import React from "react";
import { Card } from "../../core";
import PropTypes from "prop-types";

const mock = {
  cards: [
    { text: "card 1" },
    { text: "card 1" },
    { text: "card 1" },
    { text: "card 1" },
    { text: "card 1" },
    { text: "card 1" },
    { text: "card 1" },
    { text: "card 1" },
    { text: "card 1" },
    { text: "card 1" },
    { text: "card 1" },
    { text: "card 1" },
    { text: "card 1" },
    { text: "card 1" },
  ],
};

function Subjects(props) {
  return (
    <div>
      <p>Subjects</p>
      {mock.cards.map((card, index) => {
        return (
          <Card key={index} variant={"title-card"} size={"thumbnail"}>
            <h3>{card.text}</h3>
          </Card>
        );
      })}
    </div>
  );
}

Subjects.propTypes = {};

export default Subjects;
