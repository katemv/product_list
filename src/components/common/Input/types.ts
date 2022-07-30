import { UseFormRegister, Path, FieldErrors } from 'react-hook-form';
import { InputHTMLAttributes } from 'react';

export interface StyledInputProps {
    error: boolean;
}

export interface ComponentProps<TFormData> extends InputHTMLAttributes<HTMLInputElement> {
    errorMessage: string;
    placeholder: string;
    name: Path<TFormData>;
    register: UseFormRegister<TFormData>;
    errors: FieldErrors<TFormData>;
}
