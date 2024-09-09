import React from "react";
import { Route, Routes } from "react-router-dom";

// Custom components
import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Login from "./pages/Login";
import MyAppointments from "./pages/MyAppointments";
import MyProfile from "./pages/MyProfile";
import Appointment from "./pages/Appointment";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <div className="pt-20 mx-4 sm:mx-[10%]">
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/my-appointments" element={<MyAppointments />} />
        <Route path="/appointment/:docId" element={<Appointment />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/doctors/" element={<Doctors />} />
        <Route path="/doctors/:speciality" element={<Doctors />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
