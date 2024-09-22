import { createContext, ReactNode, useState } from 'react';

interface DataContextType {
  title: string;
  content: ReactNode;
  labelConfirm: string;
  labelCancel: string;
  actionConfirm: () => void;
  actionCancel: () => void;
}

interface ConfirmationModalContextType {
  data: DataContextType | undefined;
  setData: (data: DataContextType | undefined) => void;

  open: boolean;
  setOpen: (open: boolean) => void;
}

export const ConfirmationModalContext = createContext<ConfirmationModalContextType | undefined>(undefined);

interface ConfirmationModalProviderProps {
  children: ReactNode;
}

function ConfirmationModalProvider({ children }: ConfirmationModalProviderProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [data, setData] = useState<DataContextType | undefined>(undefined);

  return (
    <ConfirmationModalContext.Provider value={{ data, open, setData, setOpen }}>
      {children}
    </ConfirmationModalContext.Provider>
  );
}

export default ConfirmationModalProvider;
