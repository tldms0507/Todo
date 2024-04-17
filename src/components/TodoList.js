import { useState, useEffect } from "react";
import "./TodoList.css";

function TodoList() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDOs] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    if (toDo === "") {
      return;
    }
    const newToDos = toDos.concat({
      id: toDos.length,
      toDo,
      checked: false,
    });
    setToDOs(newToDos);
    setToDo("");

    event.preventDefault();
  };
  function checked(id) {
    setToDOs(
      toDos.map((toDo) =>
        toDo.id === id ? { ...toDo, checked: !toDo.checked } : toDo
      )
    );
  }
  function onDelete(id) {
    setToDOs(toDos.filter((toDo) => toDo.id !== id));
  }

  return (
    <div className="Container">
      <h1>To Do List</h1>
      <div className="Lefttodo">남은 할 일 : {toDos.length}개</div>
      <form onSubmit={onSubmit} className="Submit">
        <input
          onChange={onChange}
          className="inputText"
          value={toDo}
          type="text"
          placeholder="Write your to do !!"
        ></input>
        <button>➕</button>
      </form>
      <div className="Listbox">
        <ul>
          {toDos.map((item, index) => (
            <div className="Listitem">
              <div className="Listleft">
                <input
                  onClick={() => checked(item.id)}
                  className="checkbox"
                  type="checkbox"
                ></input>
                <span
                  key={index}
                  className={"itemChecked" + (item.checked ? "checked" : "")}
                >
                  {item.toDo}
                </span>
              </div>
              <div className="Listright">
                <button
                  type="button"
                  className="DeleteBtn"
                  onClick={() => onDelete(item.id)}
                >
                  ❌
                </button>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default TodoList;
