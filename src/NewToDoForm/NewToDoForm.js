import "./NewToDoForm.css";
import { useState } from "react";

const NewToDoForm = ({addToDo}) => {
  const [newToDo, setNewToDo] = useState({
    text: "",
    completed: false
  });

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
        value={newToDo.text}
        onChange={(evt) => setNewToDo({text: evt.target.value, completed: false})}
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