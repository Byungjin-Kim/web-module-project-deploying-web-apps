import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const TodoFormBlock = styled.div`
.todo-form {
  display: flex;
}

.todo-form input {
  flex: 1;
  font-size: 1.25rem;
  outline: none;
  border: none;
  border-bottom: 1px solid #45bfaf;
}

.create-button {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-left: 1rem;
  background: #22b8cf;
  border-radius: 3px;
  color: white;
  font-weight: 600;
  cursor: pointer;
}

.create-button:hover {
  background: #3bc9db;
}
`

const TodoForm = (props) => {
  const [input, setInput] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput("");
  }

  return (
    <TodoFormBlock>
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          placeholder="Add a Todo"
          name="text"
          className="todo-input"
          onChange={handleChange}
          ref={inputRef}
        />
        <button className="create-button">
          add todo
        </button>
      </form>
    </TodoFormBlock>
  );
}

export default TodoForm;