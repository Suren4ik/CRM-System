import { TodoHeader } from '../components/index';

import { useTodoService } from '../hooks/useTodoService';

export const TodoPage = () => {
  const { handleAddTask } = useTodoService();
  return (
    <>
      <TodoHeader onAddTask={handleAddTask} />
    </>
  );
};
