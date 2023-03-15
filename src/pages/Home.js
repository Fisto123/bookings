import React from "react";
import Activities from "../components/Activities";
import Booking from "../components/Booking";
import Contact from "../components/Contact";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div>
      <Hero />
      <Activities />
      <Booking />
      <Gallery />
      <Contact />
    </div>
  );
};

export default Home;
