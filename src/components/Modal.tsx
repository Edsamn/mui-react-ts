import React from 'react';
import ButtonDefault from './ButtonDefault';
import ModalStyled from './ModalStyled';

interface ModalProps {
  title: string;
  content: React.ReactNode;
  actionCancel: () => void;
  actionConfirm: ((data: string) => void) | (() => void);
}

function Modal({ content, title, actionCancel, actionConfirm }: ModalProps) {
  return (
    <ModalStyled>
      <div
        style={{
          height: '300px',
          width: '400px',
          backgroundColor: '#fff',
          color: '#333',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <h2>{title}</h2>
        </div>

        <div>{content}</div>

        <div>
          <ButtonDefault label="Cancelar" action={actionCancel} />
          <ButtonDefault label="Confirmar" action={actionConfirm} />
        </div>
      </div>
    </ModalStyled>
  );
}

export default Modal;
