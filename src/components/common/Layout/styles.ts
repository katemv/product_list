import styled from 'styled-components';

export const StyledLayout = styled.div`
    ${ ({ theme }) => theme.backgroundGradient }
    min-height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px;
`;
