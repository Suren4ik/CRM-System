import { useEffect, useState } from 'react';
import { todoApi } from '../api';
import type { Todo, TodoRequest } from '../types';
import type { TodoInfo, TodoStatus } from '../types/Task';

export const useTodoService = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todoInfo, setTodoInfo] = useState<TodoInfo | null>(null);
  const [loading, setLoadnig] = useState<boolean>(false);
  const [filter, setFilter] = useState<TodoStatus>('all');

  useEffect(() => {
    console.log('effect');
    getTodos();
  }, [filter]);

  const changeFilter = (status: TodoStatus) => {
    setFilter(status);
  };

  const getTodos = async () => {
    try {
      setLoadnig(true);

      const response = await todoApi.getTodos(filter);

      setTodos(response.data.data);
      setTodoInfo(response.data.info ?? null);
    } finally {
      setLoadnig(false);
    }
  };

  const addTodo = async (data: TodoRequest) => {
    try {
      setLoadnig(true);

      const response = await todoApi.createTodo(data);

      if (response?.data) {
        setTodos(prev => [...prev, response.data]);
      }
    } finally {
      setLoadnig(false);
    }
  };

  return {
    todos,
    loading,
    filter,

    getTodos,
    addTodo,
    todoInfo,
    changeFilter,
  };
};
