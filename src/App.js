import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Section from "./components/home-page/section/Section";
import Footer from "./components/footer/Footer";
import Contact from "./screen/Contact";
import Home from "./screen/Home";
import Service from "./screen/Service";
import SpeedTest from "./screen/SpeedTest";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/services" element={<Service />} />
        <Route path="/speed-test" element={<SpeedTest />} />
      </Routes>
      <Section />
      <Footer />
    </>
  );
}

export default App;
