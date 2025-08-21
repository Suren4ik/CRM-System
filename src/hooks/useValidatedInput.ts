import { useState, type ChangeEvent } from 'react';
import { validate } from '../utils';

export const useTodoInput = (initialValue: string = '') => {
  const [error, setError] = useState<string>('');
  const [value, setValue] = useState<string>(initialValue);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);

    if (error) setError('');
  };

  const onValidate = () => {
    const err = validate(value);
    setError(err);
    return !err;
  };

  const reset = () => {
    setValue(initialValue);
    setError('');
  };

  return {
    error,
    value,

    setValue,
    onChange,
    onValidate,
    reset,
  };
};
