import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

function SectionHeader({ title }) {
  return (
    <div>
      <p className={classNames("display-4")}>{title}</p>
      <hr />
    </div>
  );
}

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SectionHeader;
