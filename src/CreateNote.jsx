import React from "react";
import "./App.css";
const CreateNote = () => {
  return (
    <>
      <div className="main_note">
        <form action="">
          <input className="in1" type="text" placeholder="Title" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Write a note..."
          ></textarea>
          <button className="btn">+</button>
        </form>
      </div>
    </>
  );
};

export default CreateNote;
