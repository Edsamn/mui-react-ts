import { ReactNode, useState } from 'react';
import MyAppBar from '../../components/MyAppBar';
import MyDrawer from '../../components/MyDrawer';
import { Container, useTheme } from '@mui/material';
import ConfirmationModal from '../../components/ConfirmationModal';

interface DefaultLayoutProps {
  children: ReactNode;
  config?: {
    navigation: boolean;
    footer: boolean;
  };
}

function DefaultLayout({ children, config }: DefaultLayoutProps) {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  function handleOpen() {
    setOpenDrawer(!openDrawer);
  }

  const theme = useTheme();

  return (
    <div style={{ backgroundColor: theme.palette.primary.contrastText, height: '100%' }}>
      <MyAppBar actionMenu={handleOpen} />
      <MyDrawer open={openDrawer} actionClose={handleOpen} />
      <ConfirmationModal />
      <Container>{children}</Container>
    </div>
  );
}

export default DefaultLayout;
