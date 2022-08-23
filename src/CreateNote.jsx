import React, { useState } from "react";
import "./App.css";
const CreateNote = (props) => {
  const [expand, setExpand] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const inputEvent = (event) => {
    // console.log(event.target.value);
    // console.log(event.target.name);

    const { name, value } = event.target;

    setNote((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
    console.log(note);
  };

  const addEvent = (ev) => {
    ev.preventDefault();
    props.passNote(note);
    setNote({
      title: "",
      content: "",
    });
  };

  const expandIt = () => {
    setExpand(true);
  };

  const btoNormal = () => {
    setExpand(false);
  };

  return (
    <>
      <div className="main_note">
        <form action="">
          {expand ? (
            <input
              className="in1"
              name="title"
              type="text"
              value={note.title}
              onChange={inputEvent}
              placeholder="Title"
            />
          ) : null}
          <textarea
            id=""
            name="content"
            cols="30"
            rows="10"
            value={note.content}
            onChange={inputEvent}
            onClick={expandIt}
            onDoubleClick={btoNormal}
            placeholder="Write a note..."
          ></textarea>
          {expand ? (
            <button onClick={addEvent} className="btn">
              +
            </button>
          ) : null}
        </form>
      </div>
    </>
  );
};

export default CreateNote;
