import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "@/pages/home";
import { PortfolioPage } from "@/pages/portfolio";
import { FavoritesPage } from "@/pages/favorites";
import { InspirationPage } from "@/pages/inspiration";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/inspiration" element={<InspirationPage />} />
      </Routes>
    </BrowserRouter>
  );
};
