import { useContext, useEffect } from 'react';
import DefaultLayout from '../config/layout/DefaultLayout';
import { UserContext } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
// import { ContactsContext } from '../contexts/ContactsContext';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { getUsers } from '../store/models/UsersSlice';

function Home() {
  const config = {
    navigation: true,
    footer: true,
  };

  const dispatch = useAppDispatch();
  const usersRedux = useAppSelector(state => state.users);

  const navigate = useNavigate();
  const userContext = useContext(UserContext);
  // const contactsContext = useContext(ContactsContext);

  useEffect(() => {
    if (userContext?.data.token === '') {
      navigate('/');
    }

    if (userContext?.data.token) {
      dispatch(getUsers(userContext?.data.token || ''));
    }
  }, []);

  useEffect(() => {
    if (!usersRedux.auth) {
      userContext?.logout();
    }
  }, [usersRedux]);

  useEffect(() => {
    if (userContext?.data.token === '') {
      navigate('/');
    }
  }, [userContext]);

  return (
    <DefaultLayout config={config}>
      <h1>Lista de usuários</h1>
      <h2>Total de usuários: {usersRedux.users.length}</h2>
    </DefaultLayout>
  );
}

export default Home;
