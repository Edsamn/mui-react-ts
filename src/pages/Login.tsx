import { useContext, useEffect, useState } from 'react';
import DefaultLayout from '../config/layout/DefaultLayout';
import ButtonDefault from '../components/ButtonDefault';
import { UserContext } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import { doPost } from '../services/api';

function Login() {
  const [user, setUser] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  const userContext = useContext(UserContext);

  const config = {
    navigation: false,
    footer: false,
  };

  async function handleLogin() {
    setLoading(true);
    const response = await doPost('/auth', { email: user, password }, '');

    setLoading(false);
    if (response.success) {
      userContext?.setData({ user, token: response.data.token });
    }
  }

  useEffect(() => {
    if (userContext?.data?.user) {
      navigate('/home');
    }
  }, [userContext]);

  return (
    <DefaultLayout config={config}>
      <div style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div>
          <div>
            <label htmlFor="user">Login:</label>
            <input type="text" value={user} onChange={ev => setUser(ev.target.value)} />
          </div>

          <div>
            <label htmlFor="password">Senha:</label>
            <input type="password" value={password} onChange={ev => setPassword(ev.target.value)} />
          </div>
          <div>{loading ? `loading...` : <ButtonDefault label="Entrar" action={handleLogin} />}</div>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default Login;
