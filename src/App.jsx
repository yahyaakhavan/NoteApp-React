import { useReducer, useState } from "react";
import AddNewNote from "./components/AddNewNote.jsx";
import NoteList from "./components/NoteList.jsx";
import NoteStatus from "./components/NoteStatus.jsx";
import NoteHeader from "./components/NoteHeader.jsx";
import "./App.css";
const initialNoteState = [];
function addNoteFuncReducer(state, action) {
  switch (action.type) {
    case "addNote":
      return [...state, action.payload];
    case "sort":
      return state.map((item) => {
        return item.id === action.payload
          ? { ...item, completed: !item.completed }
          : item;
      });
    case "delete":
      return state.filter((item) => {
        return item.id != action.payload;
      });
    default:
      throw new Error("error has occured" + action.type);
  }
}
function App() {
  const [state, dispatch] = useReducer(addNoteFuncReducer, initialNoteState);
  // const [notes, setNotes] = useState([]);
  const [sortBy, setSortBy] = useState("latest");
  const handleAddNote = (newNote) => {
    // setNotes((prevNotes) => [...prevNotes, newNote]);
    dispatch({ type: "addNote", payload: newNote });
  };
  const handleDeleteNote = (e) => {
    // let arr = [];
    // for (let i = 0; i < state.length; i++) {
    //   if (state[i].id != e.target.dataset.noteid) {
    //     arr.push(state[i]);
    //   }
    // }
    // setNotes(arr);
    dispatch({ type: "delete", payload: e.target.dataset.noteid });
  };
  const handleCompletedNote = (e, id) => {
    // const newNote = notes.map((note) => {
    //   return note.id == id ? { ...note, completed: !note.completed } : note;
    // });
    // setNotes(newNote);
    // console.log(state);
    // setNotes((prev) => {
    //   return prev.map((note) => {
    //     return note.id == id ? { ...note, completed: !note.completed } : note;
    //   });
    // });
    dispatch({ type: "sort", payload: id });
  };
  const onSortBy = (e) => {
    setSortBy(e.target.value);
    console.log(e.target.value);
  };
  let sortedNote = state;
  console.log(state);
  return (
    <div className="container">
      <NoteHeader notes={state} sortBy={sortBy} onSortBy={onSortBy} />
      <div className="note-app">
        <AddNewNote onAddNote={handleAddNote} />
        <div className="note-container">
          <NoteStatus notes={state} />
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
