import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { EditorState } from "draft-js";
import { Editor as DraftEditor } from "react-draft-wysiwyg";
import { convertToHTML } from "draft-convert";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./styles.scss";
import { convertHTML } from "./../../../utilities/editorUtils";

function Editor({ handleContentChange }) {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  useEffect(() => {
    let htmlContent = convertHTML(editorState.getCurrentContent());
    console.log(htmlContent);
    handleContentChange(htmlContent);
  }, [editorState]);

  return (
    <div>
      <DraftEditor
        editorState={editorState}
        defaultContentState={"<p></p>"}
        onEditorStateChange={setEditorState}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
      />
    </div>
  );
}

Editor.propTypes = {};

export default Editor;
