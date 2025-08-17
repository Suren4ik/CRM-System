import { memo, useEffect, useRef, useState, type FC } from 'react';
import type { Todo, TodoRequest } from '../../../types';
import { Icon } from '../../ui';
import './TodoListItem.scss';

interface TodoListItemProps {
  todo: Todo;
  onUpdate: (id: number, data: TodoRequest) => void;
  onDelete: (id: number) => void;
}

export const TodoListItem: FC<TodoListItemProps> = memo(
  ({ todo, onUpdate, onDelete }) => {
    const [title, setTitle] = useState<string>(todo.title);
    const [isEditing, setIsEditing] = useState<boolean>(false);

    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
      setTitle(todo.title);
    }, [todo.title]);

    useEffect(() => {
      if (isEditing && inputRef.current) {
        inputRef.current.focus();
      }
    }, [isEditing]);

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
      <div className="todo-list-item">
        <input
          type="checkbox"
          checked={todo.isDone}
          onChange={() => handleUpdate({ isDone: !todo.isDone })}
        />
        {isEditing ? (
          <>
            <input
              ref={inputRef}
              className="todo-list-item__title"
              value={title}
              onChange={e => setTitle(e.target.value)}
              onKeyDown={e => {
                if (e.key === 'Enter') handleSave();
                if (e.key === 'Escape') handleCancel();
              }}
            />
            <button onClick={handleCancel}>
              <Icon variant="cancel" />
            </button>
            <button onClick={handleSave}>
              <Icon variant="save" />
            </button>
          </>
        ) : (
          <>
            <span
              onDoubleClick={() => setIsEditing(true)}
              className={
                todo.isDone
                  ? 'todo-list-item__title--done'
                  : 'todo-list-item__title'
              }
            >
              {todo.title}
            </span>
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
  }
);
