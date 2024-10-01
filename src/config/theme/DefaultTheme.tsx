import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#45e536',
      main: '#61d24d',
      dark: '#53b83c',
      contrastText: '#fff',
    },
    secondary: {
      light: '#cece29',
      main: '#c4e90c',
      dark: '#bfc21e',
      contrastText: '#000',
    },
  },
});

export default theme;
