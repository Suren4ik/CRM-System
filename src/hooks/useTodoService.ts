import { useState } from 'react';
import { todoApi } from '../api';
import type { Todo, TodoRequest } from '../types';

export const useTodoService = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoadnig] = useState(false);
  const [filter, setFilter] = useState();

  const handleAddTask = async (data: TodoRequest) => {
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

    handleAddTask,
  };
};
