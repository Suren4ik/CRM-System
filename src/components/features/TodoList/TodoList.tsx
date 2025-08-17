import type { FC } from 'react';
import type { Todo, TodoRequest } from '../../../types';
import { TodoListItem } from '../TodoListItem/TodoListItem';
import './TodoList.scss';

interface TodoListProps {
  todos: Todo[];
  onUpdate: (id: number, data: TodoRequest) => void;
  onDelete: (id: number) => void;
}

export const TodoList: FC<TodoListProps> = ({ todos, onUpdate, onDelete }) => (
  <div className="todo-list">
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
