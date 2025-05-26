import { Navigate, Route, Routes } from "react-router";
import App from "../ui/components/App/App";
import {
  LazyBattleDetailPage,
  LazyBattleFormPage,
  LazyBattlesPage,
  LazyBattleUpdatePage,
  LazyNotFoundPage,
} from "./LazyLoadings";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Navigate to={"/battles"} />} />
        <Route path="battles" element={<LazyBattlesPage />} />
        <Route path="battle/:battleId" element={<LazyBattleDetailPage />} />
        <Route path="add-battle" element={<LazyBattleFormPage />} />
        <Route
          path="edit-battle/:battleId"
          element={<LazyBattleUpdatePage />}
        />
        <Route path="*" element={<LazyNotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
