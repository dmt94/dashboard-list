import './App.css';
import { useState } from "react";
import ToDoList from './ToDoList/ToDoList';
import NewToDoForm from './NewToDoForm/NewToDoForm';

function App() {
  const [todos, setTodos] = useState([
    "Have Fun",
    "Learn React",
    "Learn the MERN-Stack"
  ]);
  const [showTodos, setShowTodos] = useState(true);
  
  function addToDo(todo) {
    // Replace state, don't mutate it
    setTodos([...todos, todo]);
  }

  return (
    <div className="App">
      <button className='btn-todo-visibility'>{showTodos ? 'HIDE': 'SHOW'}</button>
      {showTodos && <ToDoList todos={todos}/>}
      <hr />
      <NewToDoForm addToDo={addToDo}/>
    </div>
  );
}

export default App;
