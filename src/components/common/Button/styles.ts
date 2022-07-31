import styled from 'styled-components';

export const StyledButton = styled.button`
    background-color: ${ ({ theme, disabled }) => disabled ? theme.colors.greyDark : theme.colors.accent };
    color: ${ ({ theme }) => theme.colors.white };
    border: none;
    border-radius: 5px;
    margin: 10px 0px;
    height: 50px;
    width: 100%;
    font-size: 16px;
`;
