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

export const LazyBattleEditPage = lazy(
  () => import("../battle/pages/BattleEditPage/BattleEditPage"),
);

export const LazyNotFoundPage = lazy(
  () => import("../ui/pages/NotFoundPage.tsx/NotFoundPage"),
);
