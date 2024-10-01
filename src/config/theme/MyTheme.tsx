import defaultTheme from './defaultTheme';
import darkTheme from './darkTheme';
import { useEffect, ReactNode } from 'react';
import { useAppSelector } from '../../store/hooks';
import { ThemeProvider } from '@mui/material';

interface MyThemeProps {
  children: ReactNode;
}

function MyTheme({ children }: MyThemeProps) {
  const themeRedux = useAppSelector(state => state.theme);

  useEffect(() => {
    console.log(themeRedux);
  }, [themeRedux]);
  return <ThemeProvider theme={themeRedux.theme === 'dark' ? darkTheme : defaultTheme}>{children}</ThemeProvider>;
}

export default MyTheme;
