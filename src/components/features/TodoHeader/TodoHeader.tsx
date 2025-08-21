import { type FC } from 'react';
import type { TodoRequest } from '../../../types';

import { useTodoInput } from '../../../hooks/useValidatedInput';
import './TodoHeader.scss';

interface TodoHeaderProps {
  onAddTodo: (params: TodoRequest) => void;
}

export const TodoHeader: FC<TodoHeaderProps> = ({ onAddTodo }) => {
  const { value, error, onChange, onValidate, setValue } = useTodoInput();

  const disabledButton = Boolean(error && !value);

  const handleAddTodo = () => {
    if (!onValidate()) return;

    onAddTodo({ title: value });

    setValue('');
  };

  return (
    <div className="todo-header">
      <div className="todo-header__row">
        <input
          type="text"
          placeholder="Task to be done"
          value={value}
          onChange={onChange}
        />
        <button disabled={disabledButton} onClick={handleAddTodo}>
          Add
        </button>
      </div>
      {error && <div className={'todo-header__error'}>{error}</div>}
    </div>
  );
};
