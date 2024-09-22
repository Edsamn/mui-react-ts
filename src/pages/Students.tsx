import { useContext, useEffect, useState } from 'react';
import DefaultLayout from '../config/layout/DefaultLayout';
import { UserContext } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import { doDelete, doGet } from '../services/api';
import Modal from '../components/Modal';

function Students() {
  const navigate = useNavigate();
  const userContext = useContext(UserContext);
  const [loading, setLoading] = useState<boolean>(false);
  const [studentsList, setStudentsList] = useState<any[]>([]);
  const [showConfirm, setShowConfirm] = useState<boolean>(false);
  const [id, setId] = useState<string>('');

  const config = {
    navigation: true,
    footer: true,
  };

  async function getStudents() {
    setLoading(true);
    const response = await doGet('/students', `${userContext?.data.token}`);
    if (!response.auth) {
      console.log('ENTROU NO LOGOUT');
      userContext?.logout();
    }

    setLoading(false);
    if (response.success) {
      setStudentsList(response.data);
    }
  }

  useEffect(() => {
    if (userContext?.data.user === '') {
      console.log('ENTROU NO NAVIGATE');
      navigate('/');
    }

    if (userContext?.data.token) {
      getStudents();
    }
  }, [userContext]);

  async function handleDelete() {
    const response = await doDelete(`/students/${id}`, userContext?.data.token || '');
    if (response.success) {
      getStudents();
      setId('');
      showModal();
    }
  }

  function showModal(id?: string) {
    setId(id || '');
    setShowConfirm(!showConfirm);
  }

  return (
    <DefaultLayout config={config}>
      <h1>Lista de Estudantes</h1>
      {loading ? <h2>Loading...</h2> : ''}
      {studentsList.map(item => {
        return (
          <>
            <h2 key={item.id}>{item.name}</h2>
            <button onClick={() => showModal(item.id)}>Excluir</button>
          </>
        );
      })}
      {showConfirm ? (
        <Modal
          title="Excluir um estudante"
          content="Deseja realmente excluir o estudante?"
          actionConfirm={handleDelete}
          actionCancel={showModal}
        />
      ) : (
        ''
      )}
    </DefaultLayout>
  );
}

export default Students;
