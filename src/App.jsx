import "./App.css";
function App() {
  return (
    <div className="note-app">
      <div className="note-form">
        <h3>Add New Note</h3>
        <input className="text-field" type="text" placeholder="Note Title..." />
        <input
          className="text-field"
          type="text"
          placeholder="Note Description..."
        />
        <button className="btn btn--primary">Add New Note</button>
      </div>
      <div className="note-container">
        <p>No Notes has already been added!</p>
      </div>
    </div>
  );
}

export default App;
