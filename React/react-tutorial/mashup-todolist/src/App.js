import React from 'react';
import { createGlobalStyle } from 'styled-components'
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';
import TodoCreate from './components/TodoCreate';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate className="App">
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </>

  );
}

export default App;
