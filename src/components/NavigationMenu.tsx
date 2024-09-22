import { useContext } from 'react';
import navigation from '../config/navigation';
import ButtonDefault from './ButtonDefault';
import NavigationMenuItem from './NavigationMenuItem';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

function NavigationMenu() {
  const navigate = useNavigate();
  const userContext = useContext(UserContext);

  function handleLogout() {
    userContext?.logout();
    navigate('/');
  }

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        backgroundColor: '#222',
        boxShadow: 'rgba(0, 0, 0, 0.45) 0px 25px 20px -20px',
      }}
    >
      <div style={{ padding: '10px', display: 'flex', alignItems: 'center' }}>
        <img src="/logo/vite.svg" width={40} height={40} alt="logo" />
      </div>
      <div style={{ width: '100%', display: 'flex' }}>
        {navigation.map(item => (
          <NavigationMenuItem key={item.key} item={item} />
        ))}
      </div>
      <ButtonDefault action={handleLogout} label="Logout" />
    </div>
  );
}

export default NavigationMenu;
