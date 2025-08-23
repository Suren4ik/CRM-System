import { TodoHeader, TodoList, TodoListFilter } from '../components/features';
import { useTodoPage } from './useTodoPage';

export const TodoPage = () => {
  const { changeFilter, getTodos, todos, todoInfo, filter } = useTodoPage();
  return (
    <>
      <TodoHeader updateTodos={getTodos} />
      {todoInfo && (
        <TodoListFilter
          info={todoInfo}
          status={filter}
          onChange={changeFilter}
        />
      )}
      <TodoList todos={todos} updateTodos={getTodos} />
    </>
  );
};
