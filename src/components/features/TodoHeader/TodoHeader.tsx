import { type FC } from 'react';

import { todoApi } from '../../../api';
import { useValidatedInput } from '../../../hooks/useValidatedInput';
import './TodoHeader.scss';

interface TodoHeaderProps {
  updateTodos: () => void;
}

export const TodoHeader: FC<TodoHeaderProps> = ({ updateTodos }) => {
  const { value, error, onChange, onValidate, setValue } = useValidatedInput();

  const disabledButton = Boolean(error && !value);

  const handleAddTodo = async () => {
    if (!onValidate()) return;

    await todoApi.createTodo({ title: value });

    updateTodos();

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
