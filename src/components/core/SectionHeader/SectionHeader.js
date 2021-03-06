import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

function SectionHeader({ title }) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <p className={classNames("display-4")}>{title}</p>
      <hr />
    </div>
  );
}

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SectionHeader;
