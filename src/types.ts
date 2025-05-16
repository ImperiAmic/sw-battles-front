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
