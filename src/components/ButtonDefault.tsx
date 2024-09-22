interface ButtonDefaultProps {
  label: string;
  action: () => void;
  disabled?: boolean;
}

function ButtonDefault({ action, label, disabled }: ButtonDefaultProps) {
  return (
    <button disabled={disabled} onClick={action}>
      {label}
    </button>
  );
}

export default ButtonDefault;
