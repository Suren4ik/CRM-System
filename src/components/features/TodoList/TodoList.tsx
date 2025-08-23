import type { FC } from 'react';
import type { Todo } from '../../../types';
import { TodoListItem } from '../TodoListItem/TodoListItem';
import './TodoList.scss';

interface TodoListProps {
  todos: Todo[];
  updateTodos: () => void;
}

export const TodoList: FC<TodoListProps> = ({ todos, updateTodos }) => (
  <div className="todo-list">
    {todos.length ? (
      todos.map(todo => (
        <TodoListItem key={todo.id} todo={todo} updateTodos={updateTodos} />
      ))
    ) : (
      <span className="todo-list__empty">Список пуст</span>
    )}
  </div>
);
