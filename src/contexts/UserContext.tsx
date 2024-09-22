import { createContext, ReactNode, useEffect, useState } from 'react';

interface UserContextType {
  data: {
    user: string;
    token: string;
  };
  setData: (data: { user: string; token: string }) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
}

function UserProvider({ children }: UserProviderProps) {
  const [data, setData] = useState<{ user: string; token: string }>({ user: '', token: '' });

  useEffect(() => {
    if (data?.user) {
      localStorage.setItem('userLogged', JSON.stringify(data));
    }
  }, [data]);

  useEffect(() => {
    const userLogged = localStorage.getItem('userLogged');
    if (userLogged) {
      setData(JSON.parse(userLogged));
    }
  }, []);

  function logout() {
    setData({ user: '', token: '' });
    localStorage.removeItem('userLogged');
  }

  return <UserContext.Provider value={{ data, setData, logout }}>{children}</UserContext.Provider>;
}
export { UserContext };
export default UserProvider;
