import React, { FC } from 'react';
import CartCounter from 'components/common/CartCounter';
import { StyledHeader } from './styles';
import { ComponentProps } from './types';

const Header: FC<ComponentProps> = ({ title }) => (
    <StyledHeader>
        <h1>{ title }</h1>
        <CartCounter />
    </StyledHeader>
);

export default Header;
