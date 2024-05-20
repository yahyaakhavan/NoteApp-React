import { useState } from "react";
import Notes from "./NotesAPI";
import "./App.css";
function App() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  function handleclick(noteTitle, noteDesc) {
    const note = {
      title: noteTitle,
      description: noteDesc,
    };
    Notes.SaveNote(note);
    setDesc("");
    setTitle("");
  }
  return (
    <div className="note-app">
      <div className="note-form">
        <h3>Add New Note</h3>
        <input
          className="text-field"
          type="text"
          placeholder="Note Title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="text-field"
          type="text"
          placeholder="Note Description..."
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
        <button
          className="btn btn--primary"
          onClick={() => handleclick(title, desc)}
        >
          Add New Note
        </button>
      </div>
      <div className="note-container">
        <p>No Notes has already been added!</p>
      </div>
    </div>
  );
}

export default App;
