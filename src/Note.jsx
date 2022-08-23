import React from "react";
import "./App.css";

const Note = () => {
  return (
    <>
      <div className="note">
        <h4 className="p2">Title</h4>
        <br />
        <p className="p2">this is the content</p>
        <button className="b1">
          <i className="material-icons ic1">delete</i>
        </button>
      </div>
    </>
  );
};

export default Note;
