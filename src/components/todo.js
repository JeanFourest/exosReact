import React from "react";
import { useState } from "react";
import "./todo.css"

export default function Todo() {
  const [list, setList] = useState([]);
  const [text, settext] = useState("");

  function onChange(e) {
    settext(e.target.value);
  }

  const addTodo = () => {
    console.log(text);
    if(text === "") return
    setList([...list, text]);
    settext("");
  };

  const deleteTodo = (index) => {
    console.log(index)
    const filter = list.filter((_, i) => i !== index)
    setList([...filter])
  }

  return (
    <div className="todo">
      <h1 className="title">TODO</h1>
      <div className="form">
        <input className="formInput" placeholder="add new task" value={text} onChange={onChange} />
        <button onClick={addTodo}>Add todo</button>
      </div>

      <div className="list">
        {list.map((item, index) => {
          return (
            <div className="background">
              <div>
                <input type="checkbox"/>
                <p className="text">{item}</p>
              </div>
                <button onClick={() => deleteTodo(index)} className="delete">delete</button>
            </div>
          )
        })}
      </div>
      <div>

      </div>
    </div>
  )
}
