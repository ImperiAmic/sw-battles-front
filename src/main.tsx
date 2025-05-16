import { StrictMode } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router";
import { createRoot } from "react-dom/client";
import store from "./store/store";
import AppRouter from "./router/AppRouter";
import "./styles/styles.css";
import "@fontsource-variable/roboto/index.css";
import "@fontsource-variable/roboto-slab/index.css";
import "@fontsource-variable/museomoderno/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);
