import React, { Component } from "react";
import { CardThumbnail, Grid, SectionHeader } from "../../core";
import { connect } from "react-redux";
import actions from "../../../redux/actions";

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

class Subjects extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getSubjects(this.props.userId);
  }

  render() {
    return (
      <div>
        {this.props.subjects?.map((subject) => {
          return (
            <>
              <SectionHeader title={subject.name} />
              <Grid
                items={subject.decks?.map((deck, index) => {
                  return (
                    <CardThumbnail
                      key={index}
                      variant={"title-card"}
                      size={"thumbnail"}
                      title={deck.name}
                    />
                  );
                })}
              />
            </>
          );
        })}
      </div>
    );
  }
}

Subjects.propTypes = {};

const mapStateToProps = (state) => ({
  userId: state.user.id,
  subjects: state.subjects.subjects,
});

const mapDispatchToProps = (dispatch) => ({
  getSubjects: (id) => dispatch(actions.getSubjects(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Subjects);
