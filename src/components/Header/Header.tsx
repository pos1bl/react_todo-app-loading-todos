import { useState } from 'react';

import classNames from 'classnames';
import { Todo } from '../../types/Todo';

type Props = {
  isTodos: boolean;
  activeTodos: Todo[];
  removeError: () => void;
};

export const Header: React.FC<Props> = ({
  isTodos,
  activeTodos,
  removeError,
}) => {
  const [todoTitle, setTodoTitle] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setTodoTitle('');
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoTitle(event.target.value);
    removeError();
  };

  return (
    <header className="todoapp__header">
      {isTodos && (
        <button
          type="button"
          className={classNames('todoapp__toggle-all',
            { active: !activeTodos.length })}
          aria-label="activeButton"
        />
      )}

      {/* Add a todo on form submit */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="todoapp__new-todo"
          placeholder="What needs to be done?"
          value={todoTitle}
          onChange={handleChange}
        />
      </form>
    </header>
  );
};
