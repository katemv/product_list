import styled from 'styled-components';

export const StyledCard = styled.div`
    background-color: ${ ({ theme }) => theme.colors.white };
    width: 100%;
    padding: 40px 60px 60px;
    margin: 0 -10px;
    border-radius: 20px;
`;
