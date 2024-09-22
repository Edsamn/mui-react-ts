import { useContext, useEffect } from 'react';
import DefaultLayout from '../config/layout/DefaultLayout';
import { UserContext } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import { ContactsContext } from '../contexts/ContactsContext';

function Home() {
  const config = {
    navigation: true,
    footer: true,
  };

  const navigate = useNavigate();
  const userContext = useContext(UserContext);
  const contactsContext = useContext(ContactsContext);

  useEffect(() => {
    if (userContext?.data.user === '') {
      navigate('/');
    }
  }, []);

  return (
    <DefaultLayout config={config}>
      <h1>Home</h1>
      <h2>Total de contatos: {contactsContext?.data.length}</h2>
    </DefaultLayout>
  );
}

export default Home;
