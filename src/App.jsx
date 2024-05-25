import { useState } from "react";
import AddNewNote from "./components/AddNewNote.jsx";
import NoteList from "./components/NoteList.jsx";
import NoteStatus from "./components/NoteStatus.jsx";
import NoteHeader from "./components/NoteHeader.jsx";
import "./App.css";
function App() {
  const [notes, setNotes] = useState([]);
  const [sortNotes, setSortNotes] = useState([]);
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
  const handleSort = (e) => {
    console.log(e.target.value);
    console.log(notes);
    setSortNotes(
      notes.map((n) => {
        return n;
      })
    );
    setSortNotes(
      sortNotes.sort((a, b) => {
        if (new Date(a.createdAt) < new Date(b.createdAt)) {
          return -1;
        } else if (new Date(a.createdAt) > new Date(b.createdAt)) {
          return 1;
        }
      })
    );
    console.log(sortNotes);
  };
  return (
    <div className="container">
      <NoteHeader notes={notes} onSort={handleSort} />
      <div className="note-app">
        <AddNewNote onAddNote={handleAddNote} />
        <div className="note-container">
          <NoteStatus notes={notes} />
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
