function NoteList({ notes, onDeleteNote, onCompleted, sortBy }) {
  if (sortBy == "latest") {
    //DESC=>b-a
    notes.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }
  if (sortBy == "earliest") {
    //Asc=>a-b
    notes.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
  }
  if (sortBy == "completed") {
    notes.sort((a, b) => {
      if (Number(a.completed) > Number(b.completed)) {
        return -1;
      }
    });
  }
  return (
    <div className="note-list">
      {notes.map((item) => {
        return (
          <NoteItem
            key={item.id}
            note={item}
            onDelete={onDeleteNote}
            onCompletedNote={onCompleted}
          />
        );
      })}
    </div>
  );
}
export default NoteList;
function NoteItem({ note, onDelete, onCompletedNote }) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return (
    <div className={`note-item ${note.completed ? "completed" : ""}`}>
      <div className="note-item__header">
        <div>
          <p className="title">{note.Title}</p>
          <p className="desc">{note.Desc}</p>
        </div>
        <div className="actions">
          <button>
            <img
              onClick={(e) => {
                onDelete(e);
              }}
              data-noteid={note.id}
              src="../../Img/Trash.png"
            ></img>
          </button>
          <input
            onChange={(e) => {
              onCompletedNote(e, note.id);
            }}
            type="checkbox"
            name=""
            id=""
            checked={note.completed}
          />
        </div>
      </div>
      <p className="note-item__footer">
        {new Date(note.createdAt).toLocaleDateString("en", options)}
      </p>
    </div>
  );
}
