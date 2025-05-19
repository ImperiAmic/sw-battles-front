import { Outlet } from "react-router";
import Header from "../Header/Header";
import "./Layout.css";
import Modal from "../Modal/Modal";
import useModal from "../../hooks/useModal";

const Layout: React.FC = () => {
  const { modalState, hideModal } = useModal();

  return (
    <div className="main-container">
      <Header />
      <main className="page-container">
        <Outlet />
        {modalState.isOpen && (
          <Modal
            isSuccess={modalState.isSuccess}
            text={modalState.modalText}
            action={hideModal}
          />
        )}
      </main>
    </div>
  );
};

export default Layout;
