import React from "react";
import Header from "../components/home-page/header/Header";
import Content from "../components/home-page/content/Content";
import Analytics from "../components/home-page/analytics/Analytics";
import Section from "../components/home-page/section/Section";
import Footer from "../components/footer/Footer";
function Home() {
  return (
    <>
      <Header />
      <Content />
      <Analytics />
      <Section />
      <Footer />
    </>
  );
}

export default Home;
