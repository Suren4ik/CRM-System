import { useState, type FC } from 'react';
import type { Todo, TodoRequest } from '../types';
import { Icon } from './ui/Icon';

interface TodoListItemProps {
  todo: Todo;
  onUpdate: (id: number, data: TodoRequest) => void;
  onDelete: (id: number) => void;
}

export const TodoListItem: FC<TodoListItemProps> = ({
  todo,
  onUpdate,
  onDelete,
}) => {
  const [title, setTitle] = useState<string>(todo.title);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleUpdate = (data: TodoRequest) => {
    onUpdate(todo.id, data);
  };

  const handleSave = () => {
    if (title !== todo.title) {
      handleUpdate({ title });
    }

    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setTitle(todo.title);
  };

  const handleDelete = () => {
    onDelete(todo.id);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={todo.isDone}
          onChange={() => handleUpdate({ isDone: !todo.isDone })}
        />
      </label>
      {isEditing ? (
        <>
          <input value={title} onChange={e => setTitle(e.target.value)} />
          <button onClick={handleCancel}>
            <Icon variant="cancel" />
          </button>
          <button onClick={handleSave}>
            <Icon variant="save" />
          </button>
        </>
      ) : (
        <>
          <span>{todo.title}</span>
          <button onClick={() => setIsEditing(true)}>
            <Icon variant="edit" />
          </button>
          <button onClick={handleDelete}>
            <Icon variant="delete" />
          </button>
        </>
      )}
    </div>
  );
};
