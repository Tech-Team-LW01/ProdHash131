"use client";
import React from 'react';
import { Link } from 'react-scroll';
import Hero from '@/components/customComponents/devops/Hero';
import About from '@/components/customComponents/devops/About';
import Projects from '@/components/customComponents/devops/Projects';
import Mentor from '@/components/customComponents/devops/Mentor';
import Outcomes from '@/components/customComponents/devops/Outcomes';
import Pricing from '@/components/customComponents/devops/Pricing';
import Footer from '@/components/customComponents/devops/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark-900 text-white font-poppins">
      <Hero />
      <About />
      <Projects />
      <Mentor />
      <Outcomes />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;