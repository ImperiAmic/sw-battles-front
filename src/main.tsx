import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "./components/App/App";
import "@fontsource-variable/roboto/index.css";
import "@fontsource-variable/roboto-slab/index.css";
import "@fontsource-variable/museomoderno/index.css";
import "./styles/styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
