import { useState } from "react";
import AddNewNote from "./components/AddNewNote.jsx";
import NoteList from "./components/NoteList.jsx";
import "./App.css";
function App() {
  const [notes, setNotes] = useState([]);
  const handleAddNote = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };
  const handleDeleteNote = (e) => {
    let arr = [];
    for (let i = 0; i < notes.length; i++) {
      if (notes[i].id != e.target.dataset.noteid) {
        arr.push(notes[i]);
      }
    }
    setNotes(arr);
  };
  const handleCompletedNote = (e, id) => {
    console.log(e.target.checked, id);
  };
  return (
    <div className="container">
      <div className="note-header"></div>
      <div className="note-app">
        <AddNewNote onAddNote={handleAddNote} />
        <div className="note-container">
          <NoteList
            notes={notes}
            onDeleteNote={handleDeleteNote}
            onCompleted={handleCompletedNote}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
