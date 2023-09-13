import React from "react";
import Contact from "../components/Contact";
import FeaturedProducts from "../components/FeaturedProducts";
import Hero from "../components/Hero";
import Services from "../components/Services";

const Home = () => {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Services />
      <Contact />
    </main>
  );
};

export default Home;
