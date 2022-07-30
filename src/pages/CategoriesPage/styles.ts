import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CategoryLink = styled(Link)`
    background-color: ${ ({ theme }) => theme.colors.grey };
    color: ${ ({ theme }) => theme.colors.black };
    text-decoration: none;
    height: 100px;
    width: 100%;
    border-radius: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: capitalize;
    
    &:hover {
        box-shadow: 0px 0px 15px ${ ({ theme }) => theme.colors.accent };
    }
`;

export const CategoriesList = styled.ul`
    margin: 40px 0 0;
    padding: 0;
    list-style-type: none;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 40px;
    row-gap: 40px;
`;
