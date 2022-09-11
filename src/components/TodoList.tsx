import { useState } from 'react';
import { styled } from '../stitches';
import { TodoItem } from '../types';
import { ListItem } from './ListItem';
import { Modal } from './Modal';

const List = styled('ul', {
  textDecoration: 'none',
  listStyle: 'none',
  padding: '0',
});

export type TodoListProps = {
  todoItems: TodoItem[];
  setTodoItems: (todoItems: TodoItem[]) => void;
};

const _TodoList: React.FC<TodoListProps> = ({ todoItems, setTodoItems }) => {
  const [toDeleteTodo, setToDeleteTodo] = useState<TodoItem | null>(null);
  return (
    <>
      <List>
        {todoItems &&
          todoItems.map((todo) => (
            <ListItem
              text={todo.text}
              key={todo.id}
              onComplete={() => {
                const newTodos = todoItems.slice();
                const newTodo = newTodos.filter(
                  (newTodo) => newTodo.id === todo.id
                );
                if (newTodo.length > 0) {
                  newTodo[0].completed = !todo.completed;
                  setTodoItems(newTodos);
                }
              }}
              onDelete={() => setToDeleteTodo(todo)}
              checked={todo.completed}
            />
          ))}
      </List>
      {toDeleteTodo && (
        <Modal
          onAnswer={(answer) => {
            if (answer) {
              const todosClone = todoItems.slice();
              setTodoItems(
                todosClone.filter((newTodo) => newTodo.id !== toDeleteTodo.id)
              );
            }
            setToDeleteTodo(null);
          }}
        />
      )}
    </>
  );
};

export const TodoList = styled(_TodoList);
