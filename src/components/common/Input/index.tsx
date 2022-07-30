import React from 'react';
import { ErrorMessage, StyledInput } from './styles';
import { ComponentProps } from './types';

const Input = <TFormData extends Record<string, any>>({
    errorMessage,
    placeholder,
    name,
    register,
    errors = {}
}: ComponentProps<TFormData>) => (
        <>
            <StyledInput
                {...register(name, { required: true })}
                placeholder={placeholder}
                error={!!errors[name]}
            />
            {!!errors[name] && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </>
    );

export default Input;
