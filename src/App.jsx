import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";
import { useState } from "react";

const App = () => {
  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {
    // alert("Button is clicked..");
    setAddItem((prevData) => {
      return [...prevData, note];
    });
    console.log(note);
  };

  const onDelete = (id) => {
    setAddItem((olddata) =>
      olddata.filter((currData, indx) => {
        return indx !== id;
      })
    );
  };

  return (
    <>
      <Header />
      <CreateNote passNote={addNote} />

      {addItem.map((val, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem={onDelete}
          />
        );
      })}

      <Footer />
    </>
  );
};

export default App;
