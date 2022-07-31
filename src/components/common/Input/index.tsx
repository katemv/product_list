import React from 'react';
import { ErrorMessage, StyledInput } from './styles';
import { ComponentProps } from './types';

const Input = <TFormData extends Record<string, any>>({
    errorMessage,
    placeholder,
    name,
    register,
    type,
    errors = {}
}: ComponentProps<TFormData>) => (
        <>
            <StyledInput
                {...register(name, { required: true })}
                placeholder={placeholder}
                error={!!errors[name]}
                type={type}
            />
            {!!errors[name] && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </>
    );

export default Input;
