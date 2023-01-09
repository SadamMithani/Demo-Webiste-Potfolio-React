import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Potfolio from "./components/potfolio/Potfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'

const app = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Potfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default app;
