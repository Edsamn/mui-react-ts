import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: '#b83bfe',
    secondary: '#333',
  },
};

interface DefaultThemeProps {
  children: React.ReactNode;
}

function DefaultTheme({ children }: DefaultThemeProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default DefaultTheme;
