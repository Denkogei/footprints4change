import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Initiatives from "./Components/Initiatives";
import About from "./Components/About";
import Contact from "./Components/Contact";
import GetInvolved from "./Components/GetInvolved";
import Staff from "./Components/Staff";
import Footer from "./Components/Footer";
import Donate from "./Components/Donate";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/initiatives" element={<Initiatives />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/staff" element={<Staff />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
