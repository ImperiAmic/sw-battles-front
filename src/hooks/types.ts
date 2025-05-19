import type { ModalState } from "../slices/types";

export interface UseModalStructure {
  modalState: ModalState;
  showModal: (isSuccess: boolean, modalText: string) => void;
  hideModal: () => void;
}
