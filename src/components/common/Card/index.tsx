import React, { FC } from 'react';
import { StyledCard } from './styles';
import { ComponentProps } from './types';

const Layout: FC<ComponentProps> = ({ children, className }) => (
    <StyledCard className={className}>
        {children}
    </StyledCard>
);

export default Layout;
