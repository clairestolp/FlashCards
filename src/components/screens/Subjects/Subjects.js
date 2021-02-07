import React, { Component } from "react";
import { CardThumbnail, Grid, SectionHeader } from "../../core";
import { connect } from "react-redux";
import actions from "../../../redux/actions";

import PropTypes from "prop-types";

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
        {this.props.subjects?.map((subject, index) => {
          return (
            <div key={subject.name + index}>
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
            </div>
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
