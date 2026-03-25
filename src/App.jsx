import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Services from "./pages/Services";
// import Research from "./pages/Research";
// import Signals from "./pages/Signals";
// import Insights from "./pages/Insights";


function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        {/* <Route path="/research" element={<Research />} /> */}
        {/* <Route path="/signals" element={<Signals />} /> */}
        {/* <Route path="/insights" element={<Insights />} /> */}
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;