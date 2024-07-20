import { createContext, useContext, useReducer } from "react";

const NotesContext = createContext();
const NotesDispatchContext = createContext();
const initialNoteState = [];
function addNoteFuncReducer(state, action) {
  switch (action.type) {
    case "addNote":
      return [...state, action.payload];
    case "sort":
      console.log(action.payload);
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
export function NotesProvider({ children }) {
  const [state, dispatch] = useReducer(addNoteFuncReducer, initialNoteState);
  return (
    <NotesContext.Provider value={state}>
      <NotesDispatchContext.Provider value={dispatch}>
        {children}
      </NotesDispatchContext.Provider>
    </NotesContext.Provider>
  );
}
export function useNotes() {
  return useContext(NotesContext);
}
export function useNotesDispatch() {
  return useContext(NotesDispatchContext);
}
