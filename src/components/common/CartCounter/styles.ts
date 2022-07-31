import styled from 'styled-components';

export const CartCounterContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const Count = styled.div`
    display: flex;
    background-color: ${ ({ theme }) => theme.colors.accent };
    color: ${ ({ theme }) => theme.colors.white };
    height: 24px;
    line-height: 24px;
    vertical-align: center;
    padding: 0 10px;
    border-radius: 24px;
    margin-left: 5px;
`;
