import { useEffect, useState } from 'react';
import { todoApi } from '../api';
import type { Todo, TodoInfo, TodoStatus } from '../types';

export const useTodoPage = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todoInfo, setTodoInfo] = useState<TodoInfo | null>(null);
  const [filter, setFilter] = useState<TodoStatus>('all');
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    getTodos();
  }, [filter]);

  const changeFilter = (status: TodoStatus) => {
    setFilter(status);
  };

  const getTodos = async () => {
    try {
      setLoading(true);

      const response = await todoApi.getTodos(filter);

      setTodos(response.data.data);

      if (response.data.info) {
        setTodoInfo(response.data.info);
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    todos,
    loading,
    filter,
    todoInfo,

    getTodos,
    changeFilter,
  };
};
