import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Initiatives from "./Components/Initiatives";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Members from "./Components/Members";
import GetInvolved from "./Components/GetInvolved";
import Directors from "./Components/Directors";
import Staff from "./Components/StaffMembers";
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
        <Route path="/members" element={<Members />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/members/directors" element={<Directors />} />
        <Route path="/members/staff" element={<Staff />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
