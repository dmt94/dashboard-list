import "./NewToDoForm.css";
import { useState } from "react";

const NewToDoForm = ({addToDo}) => {
  const [newToDo, setNewToDo] = useState("");

  const handleAddToDo = (evt) => {
    evt.preventDefault();
    addToDo(newToDo);
    setNewToDo("");
  }
  
  return (
    <form onSubmit={handleAddToDo}>
      <h2>New To-Do</h2>
      <input 
        placeholder="New To-Do" 
        value={newToDo}
        onChange={(evt) => setNewToDo(evt.target.value)}
        required
        pattern=".{4,"
        />
      <button
        type="submit" 
        className="btn-add-todo"
        >ADD TO-DO</button>
    </form>
  );
}
 
export default NewToDoForm;