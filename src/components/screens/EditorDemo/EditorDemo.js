import React, { useState } from "react";
import PropTypes from "prop-types";
import { Editor, Card, SectionHeader } from "./../../core";

function EditorDemo(props) {
  const [cardContent, setCardContent] = useState("<p></p>");

  return (
    <div>
      <SectionHeader title={"Editor Demo"} />
      <div style={{ marginBottom: "1rem" }}>
        <Card htmlContent={cardContent} />
      </div>
      <Editor handleContentChange={setCardContent} />
    </div>
  );
}

EditorDemo.propTypes = {};

export default EditorDemo;
