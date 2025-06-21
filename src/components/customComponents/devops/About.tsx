import React from 'react';
import { Server, Database, GitBranch, Monitor, Shield, Zap } from 'lucide-react';

const About: React.FC = () => {
  const outcomes = [
    {
      icon: <Server className="w-6 h-6" />,
      text: "Build 6 real-world DevOps + Cloud projects"
    },
    {
      icon: <Database className="w-6 h-6" />,
      text: "Simulate 1-year job experience"
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      text: "Learn to deploy, monitor, and scale on AWS"
    }
  ];

  const technologies = [
    'Python Flask', 'Streamlit', 'Docker', 'Kubernetes', 
    'Jenkins', 'AWS', 'Prometheus', 'Terraform'
  ];

  return (
    <section id="about" className="section-padding bg-dark-800">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">The Series</span>
          </h2>
          <div className="w-24 h-1 bg-primary-red mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              This isn't your typical DevOps course. We believe in learning by doing. 
              Through 6 comprehensive projects, you'll build production-ready applications 
              and infrastructure that mirror real-world scenarios. Each project is designed 
              to challenge you and build upon previous knowledge, creating a complete 
              DevOps and Cloud ecosystem.
            </p>
            
            <div className="space-y-4">
              {outcomes.map((outcome, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-dark-700 rounded-lg card-hover">
                  <div className="text-primary-red">
                    {outcome.icon}
                  </div>
                  <span className="text-gray-200">{outcome.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-slide-up delay-200">
            <h3 className="text-2xl font-semibold mb-6 text-primary-red">Technologies You'll Master</h3>
            <div className="grid grid-cols-2 gap-4">
              {technologies.map((tech, index) => (
                <div 
                  key={index} 
                  className="bg-dark-700 p-4 rounded-lg text-center card-hover border-l-4 border-primary-red"
                >
                  <span className="text-gray-200 font-medium">{tech}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-gradient-to-r from-primary-red/10 to-primary-red-light/10 border-l-4 border-primary-red rounded-lg">
              <div className="flex items-center mb-3">
                <Zap className="w-6 h-6 text-primary-red mr-3" />
                <h4 className="text-xl font-semibold">Hands-On Learning</h4>
              </div>
              <p className="text-gray-300">
                Every concept is taught through practical implementation. 
                No theory-heavy sessions – just pure, hands-on experience 
                that prepares you for real-world challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;