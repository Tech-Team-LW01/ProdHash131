import React from 'react';
import { CheckCircle, Github, Briefcase, Trophy, Rocket, Target } from 'lucide-react';

const Outcomes: React.FC = () => {
  const outcomes = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Deploy 7 Production-Ready Projects",
      description: "Build and deploy complete applications with real-world complexity and scalability."
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Gain Cloud-Native DevOps Experience",
      description: "Work with industry-standard tools and practices used by top tech companies."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Master Core Technologies",
      description: "Become proficient in Jenkins, Kubernetes, Docker, Terraform, and AWS services."
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Job-Ready Confidence in 1 Week",
      description: "Accelerated learning approach that simulates real work experience."
    },
    {
      icon: <Github className="w-8 h-8" />,
      title: "Portfolio-Ready GitHub Projects",
      description: "Showcase your skills with comprehensive, documented projects that impress employers."
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Industry-Recognized Certification",
      description: "Earn credentials that validate your DevOps and Cloud expertise."
    }
  ];

  return (
    <section id="outcomes" className="section-padding bg-dark-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What You`&apos;`ll <span className="gradient-text">Achieve</span>
          </h2>
          <div className="w-24 h-1 bg-primary-red mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Transform your career with tangible outcomes that set you apart in the competitive tech landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {outcomes.map((outcome, index) => (
            <div 
              key={index}
              className="bg-dark-800 p-8 rounded-lg card-hover border border-dark-600 hover:border-primary-red/50 transition-all duration-300 group"
            >
              <div className="text-primary-red mb-6 group-hover:scale-110 transition-transform duration-300">
                {outcome.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-primary-red-light transition-colors duration-300">
                {outcome.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {outcome.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-red/10 to-primary-red-light/10 p-8 rounded-lg border border-primary-red/20">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Ready to Transform Your Career?
            </h3>
            <p className="text-gray-300 text-lg mb-6">
              Join thousands of professionals who have successfully transitioned into 
              high-paying DevOps and Cloud Engineering roles.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary-red">85%</div>
                <div className="text-gray-400">Career Growth</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-red">3x</div>
                <div className="text-gray-400">Salary Increase</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-red">95%</div>
                <div className="text-gray-400">Job Placement</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Outcomes;