import { useState } from "react";
import AddNewNote from "./components/AddNewNote.jsx";
import NoteList from "./components/NoteList.jsx";
import NoteStatus from "./components/NoteStatus.jsx";
import NoteHeader from "./components/NoteHeader.jsx";
import "./App.css";
function App() {
  const [notes, setNotes] = useState([]);
  const [sortBy, setSortBy] = useState("latest");
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
    // const newNote = notes.map((note) => {
    //   return note.id == id ? { ...note, completed: !note.completed } : note;
    // });
    // setNotes(newNote);
    setNotes((prev) => {
      return prev.map((note) => {
        return note.id == id ? { ...note, completed: !note.completed } : note;
      });
    });
  };
  const onSortBy = (e) => {
    setSortBy(e.target.value);
    console.log(e.target.value);
  };
  let sortedNote = notes;

  return (
    <div className="container">
      <NoteHeader notes={notes} sortBy={sortBy} onSortBy={onSortBy} />
      <div className="note-app">
        <AddNewNote onAddNote={handleAddNote} />
        <div className="note-container">
          <NoteStatus notes={notes} />
          <NoteList
            notes={sortedNote}
            onDeleteNote={handleDeleteNote}
            onCompleted={handleCompletedNote}
            sortBy={sortBy}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
