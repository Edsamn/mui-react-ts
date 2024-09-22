import { createContext, ReactNode, useState } from 'react';

interface ContextType {
  title: string;
  setTitle: (title: string) => void;
}
const TitleContext = createContext<ContextType | undefined>(undefined);

interface TitleProviderProps {
  children: ReactNode;
}

function TitleProvider({ children }: TitleProviderProps) {
  const [title, setTitle] = useState<string>('');

  return <TitleContext.Provider value={{ title, setTitle }}>{children}</TitleContext.Provider>;
}

export { TitleContext };
export default TitleProvider;
