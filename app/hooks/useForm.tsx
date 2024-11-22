import { useState } from 'react';

type FormValues = Record<string, string | number | boolean>;

export const useForm = <T extends FormValues>(initialValues: T) => {
  const [values, setValues] = useState<T>(initialValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, type } = e.currentTarget;
    const newValue =
      type === 'number' ? (value === '' ? '' : Number(value)) : value;
    setValues({ ...values, [id]: newValue });
  };

  return [values, handleChange] as const;
};
