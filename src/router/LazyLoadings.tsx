import { lazy } from "react";

export const LazyBattlesPage = lazy(
  () => import("../battle/pages/BattlesPage/BattlesPage"),
);

export const LazyBattleDetailPage = lazy(
  () => import("../battle/pages/BattleDetailPage/BattleDetailPage"),
);

export const LazyBattleFormPage = lazy(
  () => import("../battle/pages/BattleFormPage/BattleFormPage"),
);

export const LazyNotFoundPage = lazy(
  () => import("../pages/NotFoundPage.tsx/NotFoundPage"),
);
