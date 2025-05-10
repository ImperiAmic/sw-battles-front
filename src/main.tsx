import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import "@fontsource-variable/roboto/index.css";
import "@fontsource-variable/roboto-slab/index.css";
import "@fontsource-variable/museomoderno/index.css";
import "./styles/styles.css";
import AppRouter from "./router/AppRouter";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </StrictMode>,
);
