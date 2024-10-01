import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    primary: {
      light: '#283e6d',
      main: '#2e3c8c',
      dark: '#021f6a',
      contrastText: '#fff',
    },
    secondary: {
      light: '#e4e4e4',
      main: '#7a221b',
      dark: '#620007',
      contrastText: '#000',
    },
  },
});

export default darkTheme;
