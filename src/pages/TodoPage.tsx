import { TodoHeader, TodoList, TodoListFilter } from '../components/index';

import { useTodoService } from '../hooks/useTodoService';

export const TodoPage = () => {
  const { addTodo, changeFilter, todos, todoInfo } = useTodoService();
  return (
    <>
      <TodoHeader onAddTodo={addTodo} />
      <TodoListFilter info={todoInfo} onChange={changeFilter} />
      <TodoList todos={todos} />
    </>
  );
};
