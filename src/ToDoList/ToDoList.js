import ToDoListItem from "../ToDoListItem/ToDoListItem"
import { useState } from "react";
import "./ToDoList.css"

const ToDoList = () => {
  const [todos, setTodos] = useState([
    "Have Fun",
    "Learn React",
    "Learn the MERN-Stack"
  ]);

  return (
    <div className="todo-div">
      <h1>React To Do</h1>
      <ul>
        {
          todos.map((todo, idx) => (
            <ToDoListItem 
              item={todo} 
              key={idx} 
              idx={idx} 
              />
          ))
        }
      </ul>
    </div>
  );
}
 
export default ToDoList;