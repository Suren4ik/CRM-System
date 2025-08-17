import { TodoHeader, TodoList, TodoListFilter } from '../components/features';

import { useTodoService } from '../hooks';

export const TodoPage = () => {
  const {
    addTodo,
    changeFilter,
    updateTodo,
    deleteTodo,
    todos,
    todoInfo,
    filter,
  } = useTodoService();
  return (
    <>
      <TodoHeader onAddTodo={addTodo} />
      {todoInfo && (
        <TodoListFilter
          info={todoInfo}
          status={filter}
          onChange={changeFilter}
        />
      )}
      <TodoList todos={todos} onUpdate={updateTodo} onDelete={deleteTodo} />
    </>
  );
};
