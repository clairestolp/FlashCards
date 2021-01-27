import React, { useState } from "react";
import PropTypes from "prop-types";
import { EditorState } from "draft-js";
import SectionHeader from "./../SectionHeader";
import { Editor as DraftEditor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./styles.scss";

function Editor(props) {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  return (
    <div>
      <SectionHeader title={"Editor Demo"} />
      <DraftEditor
        editorState={editorState}
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
