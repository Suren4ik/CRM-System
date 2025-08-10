import type { FC } from 'react';
import type { Todo, TodoRequest } from '../types';
import { TodoListItem } from './TodoListItem';

interface TodoListProps {
  todos: Todo[];
  onUpdate: (id: number, data: TodoRequest) => void;
}

export const TodoList: FC<TodoListProps> = ({ todos, onUpdate }) => (
  <div>
    {todos.map(todo => (
      <TodoListItem key={todo.id} todo={todo} onUpdate={onUpdate} />
    ))}
  </div>
);
