import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../Hooks/useForm.ts';

describe('useForm Hook', () => {
  test('handles form data changes', () => {
    const { result } = renderHook(() => useForm());
    
    act(() => {
      result.current.handleChange({
        target: { name: 'name', value: 'John' }
      } as React.ChangeEvent<HTMLInputElement>);
    });
    
    expect(result.current.formData.name).toBe('John');
  });

  test('validates form correctly', () => {
    const { result } = renderHook(() => useForm());
    
    // Caso inválido
    act(() => {
      result.current.handleSubmit({
        preventDefault: jest.fn()
      } as unknown as React.FormEvent);
    });
    
    expect(result.current.errors.name).toBe('Nombre requerido');
    
    // Caso válido
    act(() => {
      result.current.handleChange({
        target: { name: 'name', value: 'John' }
      } as React.ChangeEvent<HTMLInputElement>);
      
      result.current.handleChange({
        target: { name: 'email', value: 'test@example.com' }
      } as React.ChangeEvent<HTMLInputElement>);
      
      result.current.handleSubmit({
        preventDefault: jest.fn()
      } as unknown as React.FormEvent);
    });
    
    expect(result.current.errors.name).toBeUndefined();
  });
});