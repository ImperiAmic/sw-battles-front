import { Route, Routes } from "react-router";
import NotFoundPage from "../pages/NotFoundPage.tsx/NotFoundPage";
import BattlesPage from "../battle/pages/BattlesPage/BattlesPage";

const AppRouterTest: React.FC = () => {
  return (
    <Routes>
      <Route path="battles" element={<BattlesPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouterTest;
