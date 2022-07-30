import React, { FC } from 'react';
import { StyledLayout } from './styles';
import { ComponentProps } from './types';

const Layout: FC<ComponentProps> = ({ children, className }) => (
    <StyledLayout className={className}>
        {children}
    </StyledLayout>
);

export default Layout;
