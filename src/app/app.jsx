import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "../widgets/layout/layout";
import { DesignPage } from "../pages/design-page/design-page";
import { PhilosophyPage } from "../pages/philosophy-page/philosophy-page";
import { ConceptPage } from "../pages/concept-page/concept-page";

export const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<DesignPage />} />
          <Route path="/philosophy" element={<PhilosophyPage />} />
          <Route path="/concept" element={<ConceptPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
