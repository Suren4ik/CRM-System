import type { FC } from 'react';
import type { Todo } from '../types';
import { TodoListItem } from './TodoListItem';

interface TodoListProps {
  todos: Todo[];
}

export const TodoList: FC<TodoListProps> = ({ todos }) => (
  <div>
    {todos.map(todo => (
      <TodoListItem key={todo.id} {...todo} />
    ))}
  </div>
);
