import { useEffect, useState } from 'react';
import { todoApi } from '../api';
import { TodoHeader, TodoList, TodoListFilter } from '../components/features';
import type { Todo, TodoInfo, TodoStatus } from '../types';

export const TodoPage = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todoInfo, setTodoInfo] = useState<TodoInfo | null>(null);
  const [filter, setFilter] = useState<TodoStatus>('all');

  useEffect(() => {
    getTodos();
  }, [filter]);

  const changeFilter = (status: TodoStatus) => {
    setFilter(status);
  };

  const getTodos = async () => {
    const response = await todoApi.getTodos(filter);

    setTodos(response.data.data);

    if (response.data.info) {
      setTodoInfo(response.data.info);
    }
  };

  return (
    <>
      <TodoHeader updateTodos={getTodos} />
      {todoInfo && (
        <TodoListFilter
          info={todoInfo}
          status={filter}
          onChange={changeFilter}
        />
      )}
      <TodoList todos={todos} updateTodos={getTodos} />
    </>
  );
};
