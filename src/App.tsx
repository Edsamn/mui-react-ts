import { Provider } from 'react-redux';
import GlobalStyled from './config/GlobalStyled';
import DefaultTheme from './config/theme/DefaultTheme';
import ConfirmationModalProvider from './contexts/ConfirmationModalContext';
import ContactsProvider from './contexts/ContactsContext';
import UserProvider from './contexts/UserContext';
import AppRoutes from './routes/AppRoutes';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <UserProvider>
        <ContactsProvider>
          <ConfirmationModalProvider>
            <DefaultTheme>
              <AppRoutes />
              <GlobalStyled />
            </DefaultTheme>
          </ConfirmationModalProvider>
        </ContactsProvider>
      </UserProvider>
    </Provider>
  );
}

export default App;
