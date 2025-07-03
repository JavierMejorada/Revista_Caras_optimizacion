import styled from 'styled-components';

export const FormContainer = styled.section`
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin: 20px auto;
  max-width: 1200px;
`;

export const FormTitle = styled.h2`
  margin-bottom: 20px;
  font-family: 'Playfair Display', serif;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  margin: 0 auto;
`;

export const FormLabel = styled.label`
  margin: 10px 0 5px;
  font-weight: bold;
  align-self: flex-start;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #333;
  color: #fff;
  cursor: pointer;
  font-size: 1.1rem;
  font-family: 'Barlow Bold', sans-serif;
  margin-top: 10px;
  width: 100%;

  &:hover {
    background-color: #555;
  }
`;