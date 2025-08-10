import { TodoHeader, TodoList, TodoListFilter } from '../components/index';

import { useTodoService } from '../hooks/useTodoService';

export const TodoPage = () => {
  const { addTodo, changeFilter, updateTodo, todos, todoInfo } =
    useTodoService();
  return (
    <>
      <TodoHeader onAddTodo={addTodo} />
      <TodoListFilter info={todoInfo} onChange={changeFilter} />
      <TodoList onUpdate={updateTodo} todos={todos} />
    </>
  );
};
