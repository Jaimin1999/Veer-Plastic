import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import WhatsAppButton from "./Pages/Home/Components/Whatsapp";

function App() {
  const Services = () => <h2>Services Page</h2>;
  const Contact = () => <h2>Contact Page</h2>;

  return (
    <>
      <Navbar />
      <div className="h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <WhatsAppButton />
      </div>
    </>
  );
}

export default App;
