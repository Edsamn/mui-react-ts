import { useContext, useState } from 'react';
import DefaultLayout from '../config/layout/DefaultLayout';
import { doPost } from '../services/api';
import { UserContext } from '../contexts/UserContext';

function CreateStudent() {
  const config = {
    navigation: true,
    footer: true,
  };

  const userContext = useContext(UserContext);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  async function onSend() {
    if (!userContext?.data.token) {
      return;
    }

    const response = await doPost('/students', { name, email }, userContext?.data.token || '');

    if (response.success) {
      setName('');
      setEmail('');
    }

    console.log(response);
  }

  return (
    <DefaultLayout config={config}>
      <h1>Criar novo Estudante</h1>
      <input type="text" placeholder="Digite seu nome" value={name} onChange={event => setName(event.target.value)} />
      <input
        type="text"
        placeholder="Digite seu e-mail"
        value={email}
        onChange={event => setEmail(event.target.value)}
      />
      <button onClick={onSend}>Cadastrar</button>
    </DefaultLayout>
  );
}

export default CreateStudent;
