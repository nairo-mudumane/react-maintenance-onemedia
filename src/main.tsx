import "./main.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { FormModalProvider } from "./contexts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <FormModalProvider>
      <App />
    </FormModalProvider>
  </React.StrictMode>
);
