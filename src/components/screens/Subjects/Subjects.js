import React from "react";
import { Card } from "../../core";
import PropTypes from "prop-types";

const mock = {
  cards: [
    {
      text: "card 1",
      htmlContent: '<div class="center"><h3>I am html</h3></div>',
    },
  ],
};

function Subjects(props) {
  return (
    <div>
      <p>Subjects</p>
      {mock.cards.map((card, index) => {
        return (
          <Card
            key={index}
            variant={"title-card"}
            size={"thumbnail"}
            htmlContent={card.htmlContent}
          />
        );
      })}
    </div>
  );
}

Subjects.propTypes = {};

export default Subjects;
