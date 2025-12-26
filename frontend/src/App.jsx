import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Careers from "./pages/Careers";
import JobDetails from "./pages/JobDetails";

import WhyChooseUs from "./pages/WhyChooseUs";


// import Insights from "./pages/Insights";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <div className="min-h-screen bg-background">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/careers/:jobId" element={<JobDetails />} />
          <Route path="/why-choose-us" element={<WhyChooseUs />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
          {/* <Route path="/insights" element={<Insights />} /> */}
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
