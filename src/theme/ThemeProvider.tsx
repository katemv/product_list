import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import customTheme from './theme';

interface ProviderProps {
	children: React.ReactElement | null;
}

const CustomThemeProvider: FC<ProviderProps> = ({ children }: ProviderProps) => {
    return (
        <ThemeProvider theme={customTheme}>
            {children}
        </ThemeProvider>
    );
};

export default CustomThemeProvider;
