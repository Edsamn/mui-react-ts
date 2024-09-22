import { ReactNode, useState } from 'react';
import AppStyled from '../../components/AppStyled';
import FooterApp from '../../components/FooterApp';
import NavigationMenu from '../../components/NavigationMenu';
import MyAppBar from '../../components/MyAppBar';
import MyDrawer from '../../components/MyDrawer';
import { Container } from '@mui/material';
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

  return (
    <>
      <MyAppBar actionMenu={handleOpen} />
      <MyDrawer open={openDrawer} actionClose={handleOpen} />
      <ConfirmationModal />
      <Container>{children}</Container>
    </>
    // <AppStyled>
    //   {config?.navigation !== false && <NavigationMenu />}

    //   {children}

    //   {config?.footer !== false && <FooterApp />}
    // </AppStyled>
  );
}

export default DefaultLayout;
