import { TodoHeader, TodoList, TodoListFilter } from '../components/index';

import { useTodoService } from '../hooks/useTodoService';

export const TodoPage = () => {
  const { addTodo, changeFilter, updateTodo, deleteTodo, todos, todoInfo } =
    useTodoService();
  return (
    <>
      <TodoHeader onAddTodo={addTodo} />
      {todoInfo && <TodoListFilter info={todoInfo} onChange={changeFilter} />}
      <TodoList todos={todos} onUpdate={updateTodo} onDelete={deleteTodo} />
    </>
  );
};
