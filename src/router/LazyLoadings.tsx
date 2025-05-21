import { lazy } from "react";

export const LazyNotFoundPage = lazy(
  () => import("../pages/NotFoundPage.tsx/NotFoundPage"),
);

export const LazyBattlesPage = lazy(
  () => import("../battle/pages/BattlesPage/BattlesPage"),
);
