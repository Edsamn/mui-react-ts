import { Provider } from 'react-redux';
import ConfirmationModalProvider from './contexts/ConfirmationModalContext';
import ContactsProvider from './contexts/ContactsContext';
import UserProvider from './contexts/UserContext';
import AppRoutes from './routes/AppRoutes';
import { store } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './store/store';
import MyTheme from './config/theme/MyTheme';

function App() {
  return (
    <Provider store={store}>
      <MyTheme>
        <PersistGate persistor={persistor}>
          <UserProvider>
            <ContactsProvider>
              <ConfirmationModalProvider>
                <AppRoutes />
              </ConfirmationModalProvider>
            </ContactsProvider>
          </UserProvider>
        </PersistGate>
      </MyTheme>
    </Provider>
  );
}

export default App;
