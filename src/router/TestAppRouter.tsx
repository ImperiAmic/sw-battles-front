import { Route, Routes } from "react-router";
import NotFoundPage from "../ui/pages/NotFoundPage.tsx/NotFoundPage";
import BattlesPage from "../battle/pages/BattlesPage/BattlesPage";
import BattleDetailPage from "../battle/pages/BattleDetailPage/BattleDetailPage";
import BattleFormPage from "../battle/pages/BattleFormPage/BattleFormPage";
import BattleEditPage from "../battle/pages/BattleEditPage/BattleEditPage";

const AppRouterTest: React.FC = () => {
  return (
    <Routes>
      <Route path="battles" element={<BattlesPage />} />
      <Route path="battle/:battleId" element={<BattleDetailPage />} />
      <Route path="add-battle" element={<BattleFormPage />} />
      <Route path="edit-battle/:battleId" element={<BattleEditPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouterTest;
