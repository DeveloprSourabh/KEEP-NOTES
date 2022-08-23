import React from "react";
import "./App.css";

const Note = (props) => {
const deleteNote = () => {
  props.deleteItem(props.id)
}

  return (
    <>
      <div className="note">
        <h4 className="p2">{props.title}</h4>
        <br />
        <div className="div2">
          <p className="p2">{props.content}</p>
        </div>
        <button className="b1" onClick={deleteNote}>
          <i className="material-icons ic1">delete</i>
        </button>
      </div>
    </>
  );
};

export default Note;
