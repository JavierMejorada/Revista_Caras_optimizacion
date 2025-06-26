import React, { useState } from 'react';
import styled from 'styled-components';

interface FormData {
  name: string;
  email: string;
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;

const Input = styled.input`
  margin-bottom: 1rem;
  padding: 0.5rem;
`;

const Button = styled.button`
  padding: 0.5rem;
  background: #e6007e;
  color: white;
  border: none;
  cursor: pointer;
`;

export const SubscriptionForm = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Gracias por suscribirte, ${formData.name}!`);
    setFormData({ name: '', email: '' });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input name="name" value={formData.name} onChange={handleChange} placeholder="Tu nombre" />
      <Input name="email" value={formData.email} onChange={handleChange} placeholder="Tu correo" />
      <Button type="submit">Suscribirme</Button>
    </Form>
  );
};
