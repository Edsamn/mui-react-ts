import { useEffect } from 'react';

interface FeedBackProps {
  msg: string;
  show: boolean;
  setShow: (value: boolean) => void;
}
function FeedBack({ msg, show, setShow }: FeedBackProps) {
  useEffect(() => {
    if (show) {
      setTimeout(() => {
        setShow(false);
      }, 2000);
    }
  }, [show]);

  if (!show) {
    return '';
  }

  return (
    <div style={{ position: 'absolute', top: '20px', right: '20px', height: '20px', width: '100px' }}>
      <h3>{msg}</h3>
    </div>
  );
}

export default FeedBack;
