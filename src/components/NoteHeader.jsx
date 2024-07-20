import { useNotes } from "../context/NotesContext";

function NoteHeader({ sortBy, onSortBy }) {
  const notes = useNotes();
  return (
    <div className="note-header">
      <h2>My Notes({notes.length})</h2>
      <select value={sortBy} name="" id="" onChange={onSortBy}>
        <option value="latest">Sort based on latest notes</option>
        <option value="earliest">Sort based on earliest notes</option>
        <option value="completed">Sort based on completed notes</option>
      </select>
    </div>
  );
}
export default NoteHeader;
