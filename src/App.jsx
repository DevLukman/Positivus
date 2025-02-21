import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Usecases from "./pages/Usecases";
import Pricing from "./pages/Pricing";
import Blog from "./pages/Blog";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="services" element={<Services />} />
        <Route path="usecases" element={<Usecases />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
