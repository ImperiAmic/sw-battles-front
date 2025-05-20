import { useCallback } from "react";
import {
  endLoadingActionCreator,
  startLoadingActionCreator,
} from "../slices/loadingSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import type { UseLoadingStructure } from "./types";

const useLoading = (): UseLoadingStructure => {
  const loadingState = useAppSelector((state) => state.loadingSlice);

  const dispatch = useAppDispatch();

  const startLoading = useCallback((): void => {
    const action = startLoadingActionCreator();

    dispatch(action);
  }, [dispatch]);

  const endLoading = useCallback((): void => {
    const action = endLoadingActionCreator();

    dispatch(action);
  }, [dispatch]);

  return {
    loadingState,
    startLoading,
    endLoading,
  };
};

export default useLoading;
