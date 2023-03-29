import ToDoListItem from "../ToDoListItem/ToDoListItem"
import "./ToDoList.css"

const ToDoList = ({todos}) => {
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