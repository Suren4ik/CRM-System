import type { FC } from 'react';
import type { TodoInfo } from '../types';
import type { TodoStatus } from '../types/Task';

interface TodoListFilterProps {
  info: TodoInfo | null;
  onChange: (status: TodoStatus) => void;
}
export const TodoListFilter: FC<TodoListFilterProps> = ({
  info = null,
  onChange,
}) => {
  return (
    <div>
      <button onClick={() => onChange('all')}>Все ({info?.all})</button>
      <button onClick={() => onChange('inWork')}>
        В работе ({info?.inWork})
      </button>
      <button onClick={() => onChange('completed')}>
        Сделанно ({info?.completed})
      </button>
    </div>
  );
};
