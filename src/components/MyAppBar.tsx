import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MailIcon from '@mui/icons-material/Mail';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { Badge } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { setTheme } from '../store/models/ThemeSlice';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import Brightness5Icon from '@mui/icons-material/Brightness5';

interface MyAppBarProps {
  actionMenu: () => void;
}
function MyAppBar({ actionMenu }: MyAppBarProps) {
  const counterRedux = useAppSelector(state => state.counter);
  const cartRedux = useAppSelector(state => state.cart);
  const themeRedux = useAppSelector(state => state.theme);
  const dispatch = useAppDispatch();

  function handleTheme() {
    if (themeRedux.theme === 'dark') {
      dispatch(setTheme({ theme: 'light' }));
    } else {
      dispatch(setTheme({ theme: 'dark' }));
    }
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="primary" position="static">
        <Toolbar>
          <IconButton onClick={actionMenu} size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
            <Badge badgeContent={counterRedux.value} color="primary">
              <MailIcon color="action" />
            </Badge>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Carrinho
            <Badge badgeContent={cartRedux.length} color="primary">
              <AddShoppingCartIcon color="action" />
            </Badge>
          </Typography>
          <IconButton onClick={handleTheme}>
            {themeRedux.theme === 'dark' ? <BedtimeIcon color="secondary" /> : <Brightness5Icon color="secondary" />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default MyAppBar;
