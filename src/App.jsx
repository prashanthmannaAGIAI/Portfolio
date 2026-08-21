import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
      </Routes>
    </HashRouter>
  );
}
