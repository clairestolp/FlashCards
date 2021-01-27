import React from "react";
import { CardThumbnail, Grid, SectionHeader } from "../../core";

import PropTypes from "prop-types";

const mock = {
  cards: [
    {
      name: "days of the week",
      title: "days of the week aaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    },
    {
      text: "months of the year",
      title:
        "this is a very long title that has no meaning but someone could write it who knows",
    },
    {
      text: "colors",
      title: "colors",
    },
    {
      text: "card 1",
      title: "I am html",
    },
  ],
};

function Subjects(props) {
  return (
    <div>
      <SectionHeader title="Subjects" />
      <Grid
        items={mock.cards.map((card, index) => {
          return (
            <CardThumbnail
              key={index}
              variant={"title-card"}
              size={"thumbnail"}
              title={card.title}
              htmlContent={card.htmlContent}
            />
          );
        })}
      />
    </div>
  );
}

Subjects.propTypes = {};

export default Subjects;
