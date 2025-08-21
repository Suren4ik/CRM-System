import { useEffect, useState } from 'react';
import { todoApi } from '../api/';
import type { Todo, TodoInfo, TodoRequest, TodoStatus } from '../types';

export const useTodoService = () => {
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

  const addTodo = async (data: TodoRequest) => {
    try {
      setLoading(true);

      const response = await todoApi.createTodo(data);

      if (response?.data) {
        setTodos(prev => [...prev, response.data]);
      }

      await getTodos();
    } finally {
      setLoading(false);
    }
  };

  const updateTodo = async (id: number, data: TodoRequest) => {
    try {
      const response = await todoApi.updateTodo(id, data);

      setTodos(prev =>
        prev.map(todo => (todo.id === id ? response.data : todo))
      );

      // Пока без кэширования, так как объём данных небольшой
      await getTodos();
    } catch (error) {
      console.log('Error:', error);
    }
  };

  const deleteTodo = async (id: number) => {
    const response = await todoApi.deleteTodo(id);

    if (response.data.id === id) {
      setTodos(prev => prev.filter(todo => todo.id !== id));
    }

    await getTodos();
  };

  return {
    todos,
    loading,
    filter,
    todoInfo,

    getTodos,
    addTodo,
    updateTodo,
    changeFilter,
    deleteTodo,
  };
};
