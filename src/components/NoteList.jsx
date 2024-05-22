function NoteList({ notes }) {
  return (
    <div className="note-list">
      {notes.map((item) => {
        return <NoteItem key={item.id} note={item} />;
      })}
    </div>
  );
}
export default NoteList;
function NoteItem({ note }) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return (
    <div className="note-item">
      <div className="note-item__header">
        <div>
          <p className="title">{note.Title}</p>
          <p className="desc">{note.Desc}</p>
        </div>
        <div className="actions">
          <button>*</button>
          <input type="checkbox" name="" id="" />
        </div>
      </div>
      <div className="note-item__footer">
        {new Date(note.createdAt).toLocaleDateString("en", options)}
      </div>
    </div>
  );
}
