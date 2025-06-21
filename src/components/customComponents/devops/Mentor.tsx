import React from 'react';
import { Star, Award, Users, BookOpen } from 'lucide-react';

const Mentor: React.FC = () => {
  return (
    <section id="mentor" className="section-padding bg-dark-800">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Mentorship by India's Most Loved{' '}
            <span className="gradient-text">Tech Mentor</span>
          </h2>
          <div className="w-24 h-1 bg-primary-red mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="relative inline-block group">
              <div className="w-80 h-80 mx-auto lg:mx-0 rounded-full overflow-hidden border-4 border-primary-red shadow-2xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_50px_rgba(220,38,38,0.5)]">
                <img 
                  src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Mr. Vimal Daga - Tech Mentor"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-primary-red text-white px-4 py-2 rounded-full font-semibold shadow-lg">
                Your Mentor
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">Mr. Vimal Daga Sir</h3>
              <p className="text-xl text-primary-red font-semibold mb-6">
                Visionary Mentor. Nation Builder. Tech for Good Evangelist.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                With over a decade of experience in transforming careers and building 
                tech leaders, Mr. Vimal Daga has mentored thousands of professionals 
                across the globe. His unique approach combines practical industry 
                experience with innovative teaching methodologies.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-dark-700 p-6 rounded-lg card-hover border-l-4 border-primary-red">
                <Users className="w-8 h-8 text-primary-red mb-3" />
                <h4 className="text-xl font-semibold mb-2">10,000+</h4>
                <p className="text-gray-400">Students Mentored</p>
              </div>
              
              <div className="bg-dark-700 p-6 rounded-lg card-hover border-l-4 border-primary-red">
                <Award className="w-8 h-8 text-primary-red mb-3" />
                <h4 className="text-xl font-semibold mb-2">15+ Years</h4>
                <p className="text-gray-400">Industry Experience</p>
              </div>
              
              <div className="bg-dark-700 p-6 rounded-lg card-hover border-l-4 border-primary-red">
                <BookOpen className="w-8 h-8 text-primary-red mb-3" />
                <h4 className="text-xl font-semibold mb-2">50+</h4>
                <p className="text-gray-400">Training Programs</p>
              </div>
              
              <div className="bg-dark-700 p-6 rounded-lg card-hover border-l-4 border-primary-red">
                <Star className="w-8 h-8 text-primary-red mb-3" />
                <h4 className="text-xl font-semibold mb-2">4.9/5</h4>
                <p className="text-gray-400">Student Rating</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary-red/10 to-primary-red-light/10 p-6 rounded-lg border-l-4 border-primary-red">
              <p className="text-gray-300 italic text-lg">
                "Technology should serve humanity, not the other way around. My mission is to 
                create tech leaders who build solutions that make the world a better place."
              </p>
              <p className="text-primary-red font-semibold mt-3">- Mr. Vimal Daga</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mentor;