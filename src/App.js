import React, { useState, useRef } from "react";
import "./App.css";

function List({ texts }) {
  return <div className="list">{texts.title}</div>;
}

function Form({ texts, setTexts }) {
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
    <form className="form">
      <input name="title" value={title} onChange={onChange} />
      <button type="button" onClick={onCreate}>
        추가하기
      </button>
    </form>
  );
}

function App() {
  const [texts, setTexts] = useState([
    {
      id: 1,
      title: "react를 배워봅시다.",
    },
  ]);

  return (
    <div className="layout">
      <Form texts={texts} setTexts={setTexts} />
      <h1>Todo List</h1>
      <hr />
      <div className="warp">
        {texts.map((texts) => (
          <List texts={texts} />
        ))}
      </div>
    </div>
  );
}

export default App;
