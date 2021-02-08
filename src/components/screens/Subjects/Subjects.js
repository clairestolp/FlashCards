import React, { Component } from "react";
import { CardThumbnail, Grid, SectionHeader } from "../../core";
import { connect } from "react-redux";
import actions from "../../../redux/actions";
import { BiPlus } from "react-icons/bi";
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
              <h3>
                <BiPlus />
              </h3>
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
        <h1 className={"position-absolute bottom-0 end-0 p-3"}>
          <BiPlus />
        </h1>
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
