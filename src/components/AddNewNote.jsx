import { useState } from "react";

function AddNewNote({ onAddNote }) {
  const [Title, setTitle] = useState("");
  const [Desc, setDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!Title || !Desc) {
      return;
    }
    const newNote = {
      id: new Date().getTime(),
      completed: false,
      Title,
      Desc,
      createdAt: new Date().toISOString(),
    };
    setTitle("");
    setDesc("");
    onAddNote(newNote);
  };
  return (
    <div className="add-new-note">
      <h2>Add New Note</h2>
      <form className="note-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="text-field"
          placeholder="Type Note Title"
          value={Title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          className="text-field"
          placeholder="Type Note Description"
          value={Desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button type="submit" className="btn btn--primary">
          Add New Note
        </button>
      </form>
    </div>
  );
}
export default AddNewNote;
