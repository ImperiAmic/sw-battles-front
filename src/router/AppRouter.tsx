import { Navigate, Route, Routes } from "react-router";
import App from "../components/App/App";
import {
  LazyBattleDetailPage,
  LazyBattleFormPage,
  LazyBattlesPage,
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
        <Route path="*" element={<LazyNotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
