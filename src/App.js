import './App.css';
import { useState } from "react";
import ToDoList from './ToDoList/ToDoList';
import NewToDoForm from './NewToDoForm/NewToDoForm';

function App() {
  const [todos, setTodos] = useState([
    {text: "Have Fun", completed: true},
    {text: "Learn React", completed: false},
    {text: "Learn the MERN-Stack", completed: false}
  ]);
  const [showTodos, setShowTodos] = useState(true);

  function addToDo(todo) {
    // Replace state, don't mutate it
    setTodos([...todos, todo]);
  }

  function completeToDo(todoIdx) {
    const newTodos = todos.map(
      (t, idx) => idx === todoIdx ? {text: t.text, completed: true} : t );
    setTodos(newTodos);
  }

  function deleteToDo(todoIdx) {
    let filteredTodos = todos.filter((todoItem, idx) => idx !== todoIdx );
    setTodos(filteredTodos);
  }

  return (
    <div className="App">
      <button className='btn-todo-visibility' onClick={() => (setShowTodos(!showTodos))}>{showTodos ? 'HIDE': 'SHOW'}</button>
      {showTodos && <ToDoList todos={todos} completeToDo={completeToDo} deleteToDo={deleteToDo}/>}
      <hr />
      <NewToDoForm addToDo={addToDo}/>
    </div>
  );
}

export default App;
