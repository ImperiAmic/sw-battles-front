import { type PropsWithChildren } from "react";
import BattleContext from "./BattlesContext";
import useBattles from "../hooks/useBattles";

const BattleContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const battleContextValue = useBattles();

  return (
    <BattleContext.Provider value={battleContextValue}>
      {children}
    </BattleContext.Provider>
  );
};

export default BattleContextProvider;
