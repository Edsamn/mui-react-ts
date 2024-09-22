import { createContext, ReactNode, useState } from 'react';
import ContactType from '../types/ContactType';

interface ContactsContextType {
  data: ContactType[];
  setData: (data: ContactType[]) => void;
}
export const ContactsContext = createContext<ContactsContextType | undefined>(undefined);

interface ContactsProviderProps {
  children: ReactNode;
}

function ContactsProvider({ children }: ContactsProviderProps) {
  const [data, setData] = useState<ContactType[]>([]);

  return <ContactsContext.Provider value={{ data, setData }}>{children}</ContactsContext.Provider>;
}

export default ContactsProvider;
