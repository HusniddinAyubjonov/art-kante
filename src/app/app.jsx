import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DesignPage } from "../pages/design-page";
import { PhilosophyPage } from "../pages/philosophy-page";
import { ConceptPage } from "@/pages/concept-page/concept-page";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DesignPage />} />
        <Route path="/project-design" element={<DesignPage />} />
        <Route path="/philosophy" element={<PhilosophyPage />} />
        <Route path="/concept" element={<ConceptPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
