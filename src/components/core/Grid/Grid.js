import React from "react";
import PropTypes from "prop-types";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./../../../styles/scss/theme/utils.scss";

function Grid({ items = [], itemsPerRow = 3 }) {
  const renderRows = (items, itemsPerRow) => {
    const rowArray = [];
    let colArray = [];
    items?.forEach((item, index) => {
      const count = ++index;
      colArray.push(
        <Col key={`item-${index}`}>
          <div className="pb-3">{item}</div>
        </Col>
      );
      if (count % itemsPerRow === 0) {
        rowArray.push(<Row key={`row-${rowArray.length}`}>{colArray}</Row>);
        colArray = [];
      }
    });
    if (colArray.length > 0)
      rowArray.push(<Row key={`row-${rowArray.length}`}>{colArray}</Row>);
    return rowArray;
  };

  return <div>{renderRows(items, itemsPerRow)}</div>;
}

Grid.propTypes = {
  items: PropTypes.arrayOf(PropTypes.element),
  itemsPerRow: PropTypes.number,
};

export default Grid;
