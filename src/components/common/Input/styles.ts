import styled from 'styled-components';
import { StyledInputProps } from './types';

export const ErrorMessage = styled.p`
    color: ${ ({ theme }) => theme.colors.error };
    font-size: 12px;
    margin-top: -5px;
`;

export const StyledInput = styled.input<StyledInputProps>`
    border: ${ ({ error, theme }) => error ? `1px solid ${ theme.colors.error }` : 'none' };
    background-color: ${ ({ theme }) => theme.colors.grey };
    outline-color: ${ ({ theme }) => theme.colors.accent };
    border-radius: 5px;
    padding: 0px 20px;
    height: 50px;
    width: 100%;
    margin: 10px 0px;
`;
