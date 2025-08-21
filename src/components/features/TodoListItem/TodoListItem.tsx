import { memo, useEffect, useRef, useState, type FC } from 'react';
import { useTodoInput } from '../../../hooks/useValidatedInput';
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
    const { value, error, setValue, onChange, onValidate, reset } =
      useTodoInput(todo.title);
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
      setValue(todo.title);
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
      if (!onValidate()) return;

      if (value !== todo.title) {
        handleUpdate({ title: value });
      }

      setIsEditing(false);
    };

    const handleCancel = () => {
      setIsEditing(false);
      reset();
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
              value={value}
              onChange={onChange}
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
            {error && <div className="todo-list-item__error">{error}</div>}
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
            <button onClick={() => onDelete(todo.id)}>
              <Icon variant="delete" />
            </button>
          </>
        )}
      </div>
    );
  }
);
