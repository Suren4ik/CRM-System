import { useState, type ChangeEvent, type FC } from 'react';
import type { TodoRequest } from '../types';

interface TodoHeaderProps {
  onAddTask: (params: TodoRequest) => void;
}

export const TodoHeader: FC<TodoHeaderProps> = ({ onAddTask }) => {
  const [title, setTitle] = useState<string>('');

  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleAddTask = () => {
    const normalizedTitle = title.trim();

    if (!normalizedTitle) return;

    onAddTask({ title });

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
      <button onClick={handleAddTask}>Add</button>
    </>
  );
};
