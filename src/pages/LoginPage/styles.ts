import styled from 'styled-components';

export const Background = styled.div`
    ${ ({ theme }) => theme.backgroundGradient }
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Form = styled.form`
    background-color: ${ ({ theme }) => theme.colors.white };
    width: 400px;
    padding: 30px;
    border-radius: 20px;
`;

interface InputProps {
    error: boolean;
}

export const Input = styled.input<InputProps>`
    border: ${ ({ error, theme }) => error ? `1px solid ${ theme.colors.error }` : 'none' };
    background-color: ${ ({ theme }) => theme.colors.grey };
    outline-color: ${ ({ theme }) => theme.colors.accent };
    border-radius: 5px;
    padding: 0px 20px;
    height: 50px;
    width: 100%;
    margin: 10px 0px;
`;

export const Button = styled.input`
    background-color: ${ ({ theme }) => theme.colors.accent };
    color: ${ ({ theme }) => theme.colors.white };
    border: none;
    border-radius: 5px;
    margin: 10px 0px;
    height: 50px;
    width: 100%;
    font-size: 14px;
`;

export const LoginButton = styled(Button)`
    margin-top: 40px;
`;

export const ErrorMessage = styled.p`
    color: ${ ({ theme }) => theme.colors.error };
    font-size: 12px;
    margin-top: -5px;
`;
