import { BrowserRouter, Routes, Route } from "react-router";
import { Portfolio } from "../pages/Portfolio";
import { NotFound } from "../pages/NotFound";

export function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
