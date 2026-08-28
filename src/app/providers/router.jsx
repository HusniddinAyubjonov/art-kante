import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "@/pages/home";
import { PortfolioPage } from "@/pages/portfolio";
import { FavoritesPage } from "@/pages/favorites";
import { InspirationPage } from "@/pages/inspiration";
import { DesignPage } from "@/pages/design-page";
import { PhilosophyPage } from "@/pages/philosophy-page";
import { ConceptPage } from "@/pages/concept-page/concept-page";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/inspiration" element={<InspirationPage />} />
        <Route path="/project-design" element={<DesignPage />} />
        <Route path="/philosophy" element={<PhilosophyPage />} />
        <Route path="/concept" element={<ConceptPage />} />
      </Routes>
    </BrowserRouter>
  );
};
