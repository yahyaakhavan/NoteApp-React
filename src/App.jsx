import { useState } from "react";
import AddNewNote from "./components/AddNewNote.jsx";
import NoteList from "./components/NoteList.jsx";
import NoteStatus from "./components/NoteStatus.jsx";
import NoteHeader from "./components/NoteHeader.jsx";
import "./App.css";
import { NotesProvider } from "./context/NotesContext.jsx";

function App() {
  // const [notes, setNotes] = useState([]);
  const [sortBy, setSortBy] = useState("latest");
  // const handleAddNote = (newNote) => {
  //   // setNotes((prevNotes) => [...prevNotes, newNote]);
  //   dispatch({ type: "addNote", payload: newNote });
  // };
  // const handleDeleteNote = (e) => {
  //   // let arr = [];
  //   // for (let i = 0; i < state.length; i++) {
  //   //   if (state[i].id != e.target.dataset.noteid) {
  //   //     arr.push(state[i]);
  //   //   }
  //   // }
  //   // setNotes(arr);
  //   dispatch({ type: "delete", payload: e.target.dataset.noteid });
  // };
  // const handleCompletedNote = (e, id) => {
  //   // const newNote = notes.map((note) => {
  //   //   return note.id == id ? { ...note, completed: !note.completed } : note;
  //   // });
  //   // setNotes(newNote);
  //   // console.log(state);
  //   // setNotes((prev) => {
  //   //   return prev.map((note) => {
  //   //     return note.id == id ? { ...note, completed: !note.completed } : note;
  //   //   });
  //   // });
  //   dispatch({ type: "sort", payload: id });
  // };
  const onSortBy = (e) => {
    setSortBy(e.target.value);
    console.log(e.target.value);
  };
  // let sortedNote = state;

  return (
    <NotesProvider>
      <div className="container">
        <NoteHeader sortBy={sortBy} onSortBy={onSortBy} />
        <div className="note-app">
          <AddNewNote />
          <div className="note-container">
            <NoteStatus />
            <NoteList sortBy={sortBy} />
          </div>
        </div>
      </div>
    </NotesProvider>
  );
}

export default App;
