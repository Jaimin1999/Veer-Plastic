import "./App.css";
import { useState } from "react";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import { useSelector, useDispatch } from "react-redux";
import { counter } from "./ReduxStore/stateReducer";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";

function App() {
  const dispatch = useDispatch();

  const d = useSelector((state) => state.stateCounter.count);

  const Home = () => <h2>Home Page</h2>;
  const About = () => <h2>About Page</h2>;
  const Services = () => <h2>Services Page</h2>;
  const Contact = () => <h2>Contact Page</h2>;

  return (
    <div className="min-h-screen bg-red-100">
      <div className="container ">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
