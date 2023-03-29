import "./ToDoListItem.css"

const ToDoListItem = ({item, idx, completeToDo}) => {

  function handleCompleteToDo(todoIdx) {
    completeToDo(todoIdx);
  }

  return (
    <li
      style={{
        backgroundColor: idx % 2 ? '#ECDBDC' : '#D3D9FF'
      }}
    >
      <span className="number-style"
        >
          {idx + 1}
          </span>
      <span style={{textDecoration: item.completed && "line-through"}}
        >
          {item.text}
          </span>
      <button 
        className='btn-check'
        onClick={() => {handleCompleteToDo(idx)}}
        >{item.completed ? '❌': '✅'}</button>
      </li>
   );
}
 
export default ToDoListItem;