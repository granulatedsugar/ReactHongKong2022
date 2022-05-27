import React from "react";
import Hero from "../../components/Hero";
import Statistics from "../../components/Statistics";
import Pricing from "../../components/Pricing";
import Features from "../../components/Features";
import Testimonials from "../../components/Testimonials";

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
    </>
  );
};

export default Home;
