import React from 'react';
import styled from 'styled-components';
import { useForm } from '../../Hooks/useForm.ts';

// Estilos
const FormContainer = styled.section`
  background-color: #f9f9f9;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 2rem auto;
`;

const FormTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  text-align: center;
  margin-bottom: 1.5rem;
  color: #333;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #555;
`;

const Input = styled.input<{ hasError?: boolean }>`
  padding: 0.8rem;
  border: 1px solid ${props => props.hasError ? '#ff4444' : '#ddd'};
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #ff0000;
    box-shadow: 0 0 0 2px rgba(255, 0, 0, 0.1);
  }
`;

const ErrorMessage = styled.span`
  color: #ff4444;
  font-size: 0.8rem;
  margin-top: 0.3rem;
`;

const SubmitButton = styled.button<{ isSubmitting: boolean }>`
  background-color: ${props => props.isSubmitting ? '#aaa' : '#ff0000'};
  color: white;
  padding: 1rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  cursor: ${props => props.isSubmitting ? 'not-allowed' : 'pointer'};
  transition: background-color 0.3s;

  &:hover {
    background-color: ${props => props.isSubmitting ? '#aaa' : '#cc0000'};
  }
`;

const SuccessMessage = styled.div`
  color: #00aa00;
  text-align: center;
  margin-top: 1rem;
  font-weight: bold;
`;

export const SubscriptionForm = () => {
  const {
    formData,
    errors,
    isSubmitting,
    submitSuccess,
    handleChange,
    handleSubmit
  } = useForm();

  return (
    <FormContainer className="subscription-form">
      <FormTitle>¡No te lo pierdas!</FormTitle>
      
      <StyledForm onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">Nombre:</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            hasError={!!errors.name}
          />
          {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="email">Correo Electrónico:</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            hasError={!!errors.email}
          />
          {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        </FormGroup>

        <SubmitButton 
          type="submit" 
          disabled={isSubmitting}
          isSubmitting={isSubmitting}
        >
          {isSubmitting ? 'Enviando...' : 'Suscribirse'}
        </SubmitButton>

        {submitSuccess && (
          <SuccessMessage>
            ¡Gracias por suscribirte! Te hemos enviado un correo de confirmación.
          </SuccessMessage>
        )}
      </StyledForm>
    </FormContainer>
  );
};