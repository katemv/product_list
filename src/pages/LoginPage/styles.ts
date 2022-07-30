import styled from 'styled-components';
import Button from 'components/common/Button';

export const Form = styled.form`
    background-color: ${ ({ theme }) => theme.colors.white };
    width: 400px;
    padding: 30px;
    border-radius: 20px;
`;

export const LoginButton = styled(Button)`
    margin-top: 40px;
`;
