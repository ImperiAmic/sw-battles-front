import { Navigate, Route, Routes } from "react-router";
import App from "../components/App/App";
import BattlesPage from "../battle/pages/BattlesPage/BattlesPage";
import NotFoundPage from "../pages/NotFoundPage.tsx/NotFoundPage";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Navigate to={"/battles"} />} />
        <Route path="battles" element={<BattlesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
