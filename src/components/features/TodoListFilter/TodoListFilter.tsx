import type { FC } from 'react';
import type { TodoInfo } from '../../../types';
import type { TodoStatus } from '../../../types/Task';
import './TodoListFilter.scss';

interface TodoListFilterProps {
  info: TodoInfo | null;
  status: TodoStatus;
  onChange: (status: TodoStatus) => void;
}

type FilterItem = {
  name: string;
  status: TodoStatus;
};

const filters: FilterItem[] = [
  {
    name: 'Все',
    status: 'all',
  },
  {
    name: 'В работе',
    status: 'inWork',
  },
  {
    name: 'Сделано',
    status: 'completed',
  },
];

export const TodoListFilter: FC<TodoListFilterProps> = ({
  info = null,
  status,
  onChange,
}) => {
  return (
    <div className="todo-list-filter">
      {filters.map(item => (
        <button
          key={item.status}
          type="button"
          className={item.status === status ? 'filter-active' : ''}
          onClick={() => onChange(item.status)}
        >
          {item.name} {info ? ` (${info[item.status]})` : ''}
        </button>
      ))}
    </div>
  );
};
