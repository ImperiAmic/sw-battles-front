import Button from "../Button/Button";
import "./Modal.css";

interface ModalProps {
  isSuccess: boolean;
  text: string;
  action: () => void;
}

const Modal: React.FC<ModalProps> = ({ isSuccess, text, action }) => {
  const isModalClassSuccess = isSuccess
    ? " modal-content--success"
    : " modal-content--error";

  const isImgClassSuccess = isSuccess ? " img--success" : " img--error";
  const isImgSrcSuccess = isSuccess
    ? "images/delete.svg"
    : "images/delete-white.svg";

  return (
    <dialog open className="modal">
      <div className={`modal-content${isModalClassSuccess}`}>
        <Button
          aria-label="Close modal"
          className="modal-button"
          action={action}
        >
          <img
            className={`img${isImgClassSuccess}`}
            src={isImgSrcSuccess}
            alt="Delete icon"
          />
        </Button>
        <span className="modal-text">{text}</span>
      </div>
    </dialog>
  );
};

export default Modal;
