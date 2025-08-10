import { useState, type FC } from 'react';
import type { Todo, TodoRequest } from '../types';

interface TodoListItemProps {
  todo: Todo;
  onUpdate: (id: number, data: TodoRequest) => void;
}

export const TodoListItem: FC<TodoListItemProps> = ({ todo, onUpdate }) => {
  const [title, setTitle] = useState<string>(todo.title);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleCompleteTodo = () => {
    onUpdate(todo.id, { isDone: !todo.isDone });
  };

  return (
    <div>
      <button
        onClick={handleCompleteTodo}
        aria-label={todo.isDone ? 'Mark as incomplete' : 'Mark as complete'}
      >
        {todo.isDone && 'Готово'}
      </button>
      {isEditing ? (
        <>
          <input value={title} onChange={e => setTitle(e.target.value)} />
          <button
            onClick={() => setIsEditing(true)}
            style={{
              padding: 10,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="15"
              height="15"
              viewBox="0 0 72 72"
            >
              <path d="M38.406 22.234l11.36 11.36L28.784 54.576l-12.876 4.307c-1.725.577-3.367-1.065-2.791-2.79l4.307-12.876L38.406 22.234zM41.234 19.406l5.234-5.234c1.562-1.562 4.095-1.562 5.657 0l5.703 5.703c1.562 1.562 1.562 4.095 0 5.657l-5.234 5.234L41.234 19.406z"></path>
            </svg>
          </button>
        </>
      ) : (
        <span>{title}</span>
      )}
    </div>
  );
};
