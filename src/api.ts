import axios from 'axios';
import type { Todo, TodoRequest } from './types';
import type { MetaResponse, TodoInfo, TodoStatus } from './types/Task';

const API_BASE_URL = 'easydev.club/api/v1';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const todoApi = {
  createTodo: async (request: TodoRequest) =>
    await apiClient.post<Todo>('/todos', request),

  updateTodo: async (id: number, request: TodoRequest) =>
    await apiClient.put<Todo>(`/todos/${id}`, request),

  deleteTodo: async (id: number) =>
    await apiClient.delete<Todo>(`/todos/${id}`),

  getTodoById: async (id: number) => await apiClient.get<Todo>(`/todos/${id}`),

  getTodos: async (status?: TodoStatus) => {
    const params = status ? { filter: status } : {};

    return await apiClient.get<MetaResponse<Todo, TodoInfo>>('/todos', {
      params,
    });
  },
};
