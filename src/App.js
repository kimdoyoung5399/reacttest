import React, { useState, useRef } from "react";
import "./App.css";

function App() {
  const [texts, setTexts] = useState([
    {
      id: 1,
      title: "react를 배워봅시다.",
    },
  ]);

  const [input, setInput] = useState({
    title: "",
  });

  const { title } = input;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInput({
      ...texts,
      [name]: value,
    });
  };

  const nextId = useRef(1);
  const onCreate = () => {
    const list = {
      id: nextId.current,
      title,
    };

    setInput({
      title: "",
    });
    if (title !== "") {
      setTexts([...texts, list]);
      nextId.current += 1;
    }
  };

  return (
    <div className="layout">
      <form className="form">
        <input name="title" value={title} onChange={onChange} />
        <button type="button" onClick={onCreate}>
          추가하기
        </button>
      </form>
      <h1>Todo List</h1>
      <hr />
      <div className="warp">
        {texts.map((texts) => (
          <div className="list">{texts.title}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
