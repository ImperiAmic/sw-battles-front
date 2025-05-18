import Button from "../Button/Button";
import "./Modal.css";

interface ModalProps {
  text: string;
  action: () => void;
  isSuccess?: boolean;
}

const Modal: React.FC<ModalProps> = ({ text, isSuccess, action }) => {
  const crossColor = isSuccess
    ? "images/delete.svg"
    : "images/delete-white.svg";

  const crossModifier = isSuccess
    ? " modal__cross--success"
    : " modal__cross--error";

  const modalModifier = isSuccess ? " modal--success" : " modal--error";

  return (
    <dialog open className={`modal${modalModifier}`}>
      <Button aria-label="Close modal" onClick={action}>
        <img
          className={`modal__cross${crossModifier}`}
          src={crossColor}
          alt="Close modal"
          height={30}
          width={30}
        />
      </Button>
      {text}
    </dialog>
  );
};

export default Modal;
