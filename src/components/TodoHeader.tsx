import { useState, type ChangeEvent, type FC } from 'react';
import type { TodoRequest } from '../types';

interface TodoHeaderProps {
  onAddTodo: (params: TodoRequest) => void;
}

export const TodoHeader: FC<TodoHeaderProps> = ({ onAddTodo }) => {
  const [title, setTitle] = useState<string>('');
  const normalizedTitle = title.trim();

  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleAddTodo = () => {
    if (!normalizedTitle) return;

    onAddTodo({ title });

    setTitle('');
  };

  return (
    <>
      <input
        type="text"
        placeholder="Task to be done"
        value={title}
        onChange={handleChangeTitle}
      />
      <button disabled={!normalizedTitle} onClick={handleAddTodo}>
        Add
      </button>
    </>
  );
};
