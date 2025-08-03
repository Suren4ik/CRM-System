import { TodoHeader } from '../components/index';

import { useTodoService } from '../hooks/useTodoService';

export const TodoPage = () => {
  const {} = useTodoService();
  return (
    <>
      <TodoHeader />
    </>
  );
};
