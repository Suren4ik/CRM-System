import { useState, type ChangeEvent, type FC } from 'react';
import type { TodoRequest } from '../../../types';

import { validate } from '../../../utils';
import './TodoHeader.scss';

interface TodoHeaderProps {
  onAddTodo: (params: TodoRequest) => void;
}

export const TodoHeader: FC<TodoHeaderProps> = ({ onAddTodo }) => {
  const [title, setTitle] = useState<string>('');
  const [error, setError] = useState<string | null>();

  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);

    if (error) setError(null);
  };

  const handleAddTodo = () => {
    const validationError = validate(title);

    if (validationError) {
      setError(validationError);
      return;
    }

    onAddTodo({ title });

    setTitle('');
  };

  return (
    <div className="todo-header">
      <div className="todo-header__row">
        <input
          type="text"
          placeholder="Task to be done"
          value={title}
          onChange={handleChangeTitle}
        />
        <button disabled={!!error} onClick={handleAddTodo}>
          Add
        </button>
      </div>
      {error && <div className={'todo-header__error'}>{error}</div>}
    </div>
  );
};
