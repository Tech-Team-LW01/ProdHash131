import React from 'react';
import { ChevronDown, Play, Code, Cloud } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero: React.FC = () => {
  const handleBookNow = () => {
    window.open('https://rzp.io/l/yourpaymentlink', '_blank');
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-700"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary-red/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary-red/5 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary-red/8 rounded-full animate-pulse delay-500"></div>

      <div className="container-custom section-padding relative z-10">
        <div className="text-center animate-fade-in">
          <div className="flex justify-center items-center mb-6">
            <Code className="w-12 h-12 text-primary-red mr-4" />
            <Cloud className="w-12 h-12 text-primary-red-light" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            The Project
            <span className="gradient-text block">Web Series</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Learn DevOps + Cloud the Real Way – Through{' '}
            <span className="text-primary-red font-semibold">6 Full-Scale Projects</span>
          </p>
          
          <div className="space-y-4 sm:space-y-0 sm:space-x-6 sm:flex sm:justify-center">
            <button 
              onClick={handleBookNow}
              className="btn-primary animate-pulse-glow text-lg w-full sm:w-auto"
            >
              <Play className="w-5 h-5 inline mr-2" />
              Book Now
            </button>
            
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary-red text-primary-red hover:bg-primary-red hover:text-white transition-all duration-300 rounded-lg cursor-pointer w-full sm:w-auto"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link to="about" smooth={true} duration={500}>
          <ChevronDown className="w-8 h-8 text-primary-red cursor-pointer hover:text-primary-red-light transition-colors" />
        </Link>
      </div>
    </section>
  );
};

export default Hero;