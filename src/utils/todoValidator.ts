export const validate = (value: string) => {
  const trimmed = value.trim();

  if (!trimmed || trimmed.length < 2 || trimmed.length > 64)
    return 'Название должно содержать от 2 до 64 символов';

  return '';
};
