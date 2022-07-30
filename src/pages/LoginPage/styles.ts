import styled from 'styled-components';
import Button from 'components/Button';

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

export const LoginButton = styled(Button)`
    margin-top: 40px;
`;
