import { Provider } from 'react-redux';
import GlobalStyled from './config/GlobalStyled';
import DefaultTheme from './config/theme/DefaultTheme';
import ConfirmationModalProvider from './contexts/ConfirmationModalContext';
import ContactsProvider from './contexts/ContactsContext';
import UserProvider from './contexts/UserContext';
import AppRoutes from './routes/AppRoutes';
import { store } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './store/store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
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
      </PersistGate>
    </Provider>
  );
}

export default App;
