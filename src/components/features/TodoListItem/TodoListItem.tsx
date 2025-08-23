import { memo, useEffect, useRef, useState, type FC } from 'react';
import { todoApi } from '../../../api';
import { useValidatedInput } from '../../../hooks/useValidatedInput';
import type { Todo, TodoRequest } from '../../../types';
import { Icon } from '../../ui';
import './TodoListItem.scss';

interface TodoListItemProps {
  todo: Todo;
  updateTodos: () => void;
}

export const TodoListItem: FC<TodoListItemProps> = memo(
  ({ todo, updateTodos }) => {
    const { value, error, setValue, onChange, onValidate, reset } =
      useValidatedInput(todo.title);
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

    const handleUpdate = async (data: TodoRequest) => {
      await todoApi.updateTodo(todo.id, data);

      updateTodos();
    };

    const handleDelete = async () => {
      await todoApi.deleteTodo(todo.id);

      updateTodos();
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
        <div className="todo-list-item__content">
          {isEditing ? (
            <>
              <input
                ref={inputRef}
                className="todo-list-item__title-input"
                value={value}
                onChange={onChange}
                onKeyDown={e => {
                  if (e.key === 'Enter') handleSave();
                  if (e.key === 'Escape') handleCancel();
                }}
                aria-label="title"
                maxLength={64}
              />
              {error && <div className="todo-list-item__error">{error}</div>}
            </>
          ) : (
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
          )}
        </div>
        <div className="todo-list-item__actions">
          {isEditing ? (
            <>
              <button onClick={handleCancel} aria-label="cancel">
                <Icon variant="cancel" />
              </button>
              <button onClick={handleSave} aria-label="save">
                <Icon variant="save" />
              </button>
            </>
          ) : (
            <button onClick={() => setIsEditing(true)} aria-label="edit">
              <Icon variant="edit" />
            </button>
          )}
          <button onClick={handleDelete} aria-label="delete">
            <Icon variant="delete" />
          </button>
        </div>
      </div>
    );
  }
);
