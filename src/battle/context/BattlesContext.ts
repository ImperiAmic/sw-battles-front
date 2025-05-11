import { createContext } from "react";
import type { BattleContextStructure } from "./types";

const BattleContext = createContext<BattleContextStructure | null>(null);

BattleContext.displayName = "BattleContext";

export default BattleContext;
