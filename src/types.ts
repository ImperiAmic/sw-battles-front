export interface Battle {
  id: string;
  battleName: string;
  conflict: string;
  year: number;
  period: "BBY" | "ABY";
  imageUrl: string;
  imageAlt: string;
  description: string;
  lightSide: string[];
  darkSide: string[];
  doesLightSideWin: boolean;
}

export interface BattlesInfo {
  battles: Battle[];
  battlesTotal: number;
}

export type BattleFormData = Omit<
  Battle,
  "id" | "period" | "lightSide" | "darkSide" | "imageAlt"
> & {
  period: string;
  lightSide: string;
  darkSide: string;
};

export type BattleFormDataDto = Omit<
  BattleFormData,
  "lightSide" | "darkSide"
> & {
  lightSide: string[];
  darkSide: string[];
};
