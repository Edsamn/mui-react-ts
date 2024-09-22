import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MailIcon from '@mui/icons-material/Mail';
import { useAppSelector } from '../store/hooks';
import { Badge } from '@mui/material';

interface MyAppBarProps {
  actionMenu: () => void;
}
function MyAppBar({ actionMenu }: MyAppBarProps) {
  const counterRedux = useAppSelector(state => state.counter);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="error" position="static">
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
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default MyAppBar;
