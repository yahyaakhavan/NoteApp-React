import "./App.css";
function SideBar() {
  return (
    <div className="YAHYA__sidebar">
      <h3>Add New Note</h3>
      <div className="YAHYA_sidebar__text">
        <input className="text-field" type="text" placeholder="Note Title..." />
        <input
          className="text-field"
          type="text"
          placeholder="Note Description..."
        />
      </div>
      <button className="btn btn--primary">Add New Note</button>
    </div>
  );
}
export default SideBar;
