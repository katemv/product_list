import styled from 'styled-components';

export const Background = styled.div`
    background: rgb(212,191,252);
    background: linear-gradient(144deg, rgba(212,191,252,1) 0%, rgba(164,198,252,1) 100%);
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Form = styled.form`
    background-color: #ffffff;
    width: 400px;
    padding: 30px;
    border-radius: 20px;
`;

interface InputProps {
    error: boolean;
}

export const Input = styled.input<InputProps>`
    border: ${ ({ error }) => error ? '1px solid #eb4335' : 'none' };
    border-radius: 5px;
    background-color: #eff1f4;
    outline-color: #7754f6;
    padding: 0px 20px;
    height: 50px;
    width: 100%;
    margin: 10px 0px;
`;

export const Button = styled.input`
    background-color: #7754f6;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    margin: 10px 0px;
    height: 50px;
    width: 100%;
`;

export const LoginButton = styled(Button)`
    margin-top: 40px;
`;

export const ErrorMessage = styled.p`
    color: #eb4335;
    font-size: 12px;
    margin-top: -5px;
`;
