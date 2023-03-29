import ToDoListItem from "../ToDoListItem/ToDoListItem"
import "./ToDoList.css"

const ToDoList = ({todos, completeToDo}) => {
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
              completeToDo={completeToDo} 
              />
          ))
        }
      </ul>
    </div>
  );
}
 
export default ToDoList;