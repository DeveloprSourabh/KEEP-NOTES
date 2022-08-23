import React from "react";
import "./App.css";

const Note = (props) => {
  return (
    <>
      <div className="note">
        <h4 className="p2">{props.title}</h4>
        <br />
        <div className="div2">
          <p className="p2">{props.content}</p>
        </div>
        <button className="b1">
          <i className="material-icons ic1">delete</i>
        </button>
      </div>
    </>
  );
};

export default Note;
