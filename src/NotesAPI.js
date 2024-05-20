export default class Notes {
  static getAllNotes() {
    const allNotes = JSON.parse(localStorage.getItem("Notes")) || [];
    if (allNotes == []) {
      return [];
    } else {
      const sortNotes = allNotes.sort((a, b) => {
        return new Date(a.updated) < new Date(b.updated) ? 1 : -1;
      });

      return sortNotes;
    }
  }
  static SaveNote(note) {
    console.log(note);
    let allNotes = Notes.getAllNotes();
    const existNote = allNotes.find((n) => {
      return n.id == note.id;
    });
    if (existNote) {
      existNote.updated = new Date().toISOString();
      existNote.title = note.title;
      existNote.description = note.body;
    } else {
      note.id = new Date().getTime();
      note.updated = new Date().toISOString();
      allNotes.push(note);
    }
    localStorage.setItem("Notes", JSON.stringify(allNotes));
  }
  static deleteNote(id) {
    const allNotes = this.getAllNotes();
    const filteredNotes = allNotes.filter((n) => {
      return n.id != id;
    });
    localStorage.setItem("Notes", JSON.stringify(filteredNotes));
  }
}
