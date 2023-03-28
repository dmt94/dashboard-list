import './App.css';
import ToDoList from './ToDoList/ToDoList';

function App() {
  let showTodos = true;
  return (
    <div className="App">
      {showTodos && <ToDoList/>}
    </div>
  );
}

export default App;
