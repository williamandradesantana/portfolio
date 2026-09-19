import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import "./styles/global.css";

try {
  const storedTheme = localStorage.getItem("theme");
  document.documentElement.classList.toggle("dark", storedTheme !== "light");
} catch {
  // localStorage indisponível: mantém o tema padrão definido no Header
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
