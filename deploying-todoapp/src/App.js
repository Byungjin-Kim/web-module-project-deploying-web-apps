import React from 'react';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import './App.css';

import TodoList from './components/TodoList';


const GlobalStyle = createGlobalStyle`
body {
  background: #EDFEF7;
}
`

const TodoAppBlock = styled.div`
.todo-app {
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 520px;
  min-height: 600px;
  background: #57FEB6;
  text-align: center;
  margin: 128px auto;
  border-radius: 10px;
  padding-bottom: 32px;
}
`

const App = () => {
  return (
    <>
      <GlobalStyle />
      <TodoAppBlock>
        <div className='todo-app'>
          <TodoList />
        </div>
      </TodoAppBlock>
    </>
  );
}


export default App;