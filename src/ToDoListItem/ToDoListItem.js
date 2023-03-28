import "./ToDoListItem.css"

const ToDoListItem = ({item, idx}) => {
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
      {item}</li>
   );
}
 
export default ToDoListItem;