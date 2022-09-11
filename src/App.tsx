import './App.css';

import { v4 as uuid } from 'node-uuid';
import React, { useState } from 'react';

import { AddInput } from './components/AddInput';
import { TodoList } from './components/TodoList';
import { styled } from './stitches';
import { TodoItem } from './types';

const TodoContainer = styled('div', {
  margin: '0 auto',
  width: '100%',
  padding: '4vh 4vw',
  '@lg': {
    width: '33%',
  },
});
const Title = styled('h1', {
  fontSize: 'large',
  textAlign: 'left',
});

function App() {
  const [todoItems, setTodoItems] = useState<TodoItem[]>([]);
  const addTodoItem = (text: string) => {
    if (text.trim().length > 0) {
      setTodoItems([
        ...todoItems,
        {
          id: uuid(),
          text: text,
          completed: false,
        },
      ]);
    }
  };
  return (
    <div className='App'>
      <TodoContainer>
        <Title>Todo List</Title>
        <AddInput onTodoAdded={addTodoItem} />
        <TodoList
          css={{ marginTop: '10px' }}
          todoItems={todoItems}
          setTodoItems={setTodoItems}
        />
      </TodoContainer>
    </div>
  );
}

export default App;
