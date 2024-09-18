import React from 'react';

import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const defaaultTodos = [
  { text: 'Corta Cebolla', completed: true },
  { text: 'Tomar el curso de React.js', completed: false },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'Revisar nuevamente ', completed: false }
]; 

function App() {
  return (
    <React.Fragment>
      <TodoCounter completed={15} total={25}/>
      <TodoSearch />

    <TodoList>
      {/* <TodoItem/>
      <TodoItem/>
      <TodoItem/> se reemplaza con el sgte codigo:*/}
      {defaaultTodos.map(todo => (
        <TodoItem key={todo.text} text= {todo.text} completed={todo.completed} />
      ))}
    </TodoList>

    <CreateTodoButton /> 

    </React.Fragment>
  );
}


export default App;
