function NoteStatus({ notes }) {
  const allNotes = notes.length;
  const completed = (notes) => {
    let o = 0;
    let u = 0;
    for (let i = 0; i < notes.length; i++) {
      if (notes[i].completed) {
        o++;
      } else {
        u++;
      }
    }
    return [o, u];
  };
  if (!allNotes) {
    return <h2>No Notes has already been added.</h2>;
  }
  return (
    <ul className="note-status">
      <li>
        All <span>{allNotes}</span>
      </li>

      <li>
        Completed <span>{completed(notes)[0]}</span>
      </li>

      <li>
        open <span>{completed(notes)[1]}</span>
      </li>
    </ul>
  );
}
export default NoteStatus;
