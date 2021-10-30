import React, { useState } from "react";
import "./List.css";
import ListInput from "./ListInput";
import ListItem from "./ListItem";

const List = (props) => {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  const deleteTask = (item) => {
    const newList = list.filter((data) => item !== data);
    setList(newList);
    setInput("");
    setError(false);
  };

  const addItem = () => {
    let existData = list.find((data) => data === input);

    if (input === "") {
      setError("Please enter the task");
      return;
    }
    if (input.match(/^\d/)) {
      setError("Task does not start with number");
      return;
    }
    if (existData) {
      setError("The task alredy exist");
      return;
    }
    setList((data) => [...data, input]);
    setError("");
    setInput("");
  };

  return (
    <div className="list__container">
      <div className="list__info">
        <p className="list__heading">ToDo List</p>
        <div className="list__main">
          <h2>ToDo List</h2>
          <ListInput
            error={error}
            setInput={setInput}
            addItem={addItem}
            input={input}
          />
          <ListItem list={list} deleteTask={deleteTask} />
        </div>
      </div>
    </div>
  );
};

export default List;
