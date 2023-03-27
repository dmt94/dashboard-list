import ToDoListItem from "./ToDoListItem";

const ToDoList = () => {
  return (
    <div className="todo-div">
      <h1>React To Do</h1>
      <ul>
        <ToDoListItem item="Finish Lesson" />
        <ToDoListItem item="Finish Lab" />
      </ul>
    </div>
  );
}
 
export default ToDoList;