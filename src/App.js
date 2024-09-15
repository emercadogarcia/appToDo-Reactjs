import logo from './platzi.webp';

import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton'
import './App.css';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <TodoCounter completed={15} total={25}/>
      <TodoSearch />

    <TodoList>
      <TodoItem/>
      <TodoItem/>
      <TodoItem/>
    </TodoList>

    <CreateTodoButton /> 

    </React.Fragment>
  );
}


export default App;
