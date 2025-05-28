import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  hideModalActionCreator,
  showModalActionCreator,
} from "../slices/modalSlice";
import type { ShowModalPayload } from "../slices/types";
import type { UseModalStructure } from "./types";

const useModal = (): UseModalStructure => {
  const modalState = useAppSelector((state) => state.modalSlice);

  const dispatch = useAppDispatch();

  const showModal = useCallback(
    (isSuccess: boolean, modalText: string): void => {
      const payload: ShowModalPayload = { isSuccess, modalText };

      const action = showModalActionCreator(payload);

      dispatch(action);
    },
    [dispatch],
  );

  const hideModal = (): void => {
    const action = hideModalActionCreator();

    dispatch(action);
  };

  return {
    modalState,
    showModal,
    hideModal,
  };
};

export default useModal;
