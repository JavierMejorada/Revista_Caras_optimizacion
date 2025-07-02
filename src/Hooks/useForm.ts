import { useState } from 'react';


export interface FormData {
  name: string;
  email: string;
}

export const useForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setFormData({ name: '', email: '' });
  };

  return {
    formData,
    handleChange,
    resetForm,
  };
};
