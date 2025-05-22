import { lazy } from "react";

export const LazyBattlesPage = lazy(
  () => import("../battle/pages/BattlesPage/BattlesPage"),
);

export const LazyBattleDetailPage = lazy(
  () => import("../battle/pages/BattleDetail/BattleDetailPage"),
);

export const LazyNotFoundPage = lazy(
  () => import("../pages/NotFoundPage.tsx/NotFoundPage"),
);
