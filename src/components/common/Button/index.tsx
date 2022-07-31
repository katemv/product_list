import React, { ButtonHTMLAttributes } from 'react';
import { StyledButton } from './styles';

const Button = ({ type, disabled, children, onClick }: ButtonHTMLAttributes<HTMLButtonElement>) => (
    <StyledButton
        type={type}
        disabled={disabled}
        onClick={onClick}
    >
        {children}
    </StyledButton>
);

export default Button;
