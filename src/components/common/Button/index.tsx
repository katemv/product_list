import React, { ButtonHTMLAttributes } from 'react';
import { StyledButton } from './styles';

const Button = ({ type, children }: ButtonHTMLAttributes<HTMLButtonElement>) => (
    <StyledButton
        type={type}
    >
        {children}
    </StyledButton>
);

export default Button;
