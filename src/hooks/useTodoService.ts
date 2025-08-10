import { useEffect, useState } from 'react';
import { todoApi } from '../api';
import type { Todo, TodoRequest } from '../types';
import type { TodoInfo, TodoStatus } from '../types/Task';

export const useTodoService = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todoInfo, setTodoInfo] = useState<TodoInfo | null>(null);
  const [filter, setFilter] = useState<TodoStatus>('all');
  const [loading, setLoadnig] = useState<boolean>(false);

  useEffect(() => {
    console.log('filter effect');
    getTodos();
  }, [filter]);

  useEffect(() => {
    if (todoInfo) {
      console.log('todo info effect');
      updateTodoInfo();
    }
  }, [todos]);

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

  const updateTodo = async (id: number, data: TodoRequest) => {
    try {
      const response = await todoApi.updateTodo(id, data);

      setTodos(prev =>
        prev.map(todo => (todo.id === id ? response.data : todo))
      );
    } catch (error) {
      console.log('Error:', error);
    }
  };

  const updateTodoInfo = () => {
    const info = todos.reduce(
      (acc, todo) => {
        acc.all += 1;

        if (todo.isDone) {
          acc.completed += 1;
        } else {
          acc.inWork += 1;
        }

        return acc;
      },
      { all: 0, completed: 0, inWork: 0 }
    );

    setTodoInfo(info);
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
  };
};
