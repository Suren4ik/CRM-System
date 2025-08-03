import type { FC } from 'react';
import type { Todo } from '../types';

export const TodoListItem: FC<Todo> = ({ title }) => {
  return (
    <div>
      <span>{title}</span>
    </div>
  );
};
