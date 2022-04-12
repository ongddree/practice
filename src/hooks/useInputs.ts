import { useState, useCallback } from 'react';
import { InputInterface } from '../@types/Interface';

function useInputs(initialForm: InputInterface) {
  const [form, setForm] = useState(initialForm);
  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((form: InputInterface) => ({ ...form, [name]: value }));
  }, []);
  const reset = useCallback(() => setForm(initialForm), [initialForm]);

  return [form, onChange, reset] as const;
}

export default useInputs;
