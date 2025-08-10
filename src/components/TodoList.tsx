import type { FC } from 'react';
import type { Todo, TodoRequest } from '../types';
import { TodoListItem } from './TodoListItem';

interface TodoListProps {
  todos: Todo[];
  onUpdate: (id: number, data: TodoRequest) => void;
  onDelete: (id: number) => void;
}

export const TodoList: FC<TodoListProps> = ({ todos, onUpdate, onDelete }) => (
  <div>
    {todos.map(todo => (
      <TodoListItem
        key={todo.id}
        todo={todo}
        onUpdate={onUpdate}
        onDelete={onDelete}
      />
    ))}
  </div>
);
