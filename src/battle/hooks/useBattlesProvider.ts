import { useContext } from "react";
import type { BattleContextStructure } from "../context/types";
import BattleContext from "../context/BattlesContext";

const useBattlesProvider = (): BattleContextStructure => {
  const context = useContext(BattleContext);

  if (!context) {
    throw new Error("Missing context for battles provider");
  }

  return context;
};

export default useBattlesProvider;
