import React from 'react';
import { Check, Star, Clock, Users, Phone, Mail } from 'lucide-react';

const Pricing: React.FC = () => {
  const handleBookNow = () => {
    window.open('https://rzp.io/l/yourpaymentlink', '_blank');
  };

  const features = [
    "7 Complete DevOps Projects",
    "1-on-1 Mentorship with Vimal Daga Sir",
    "Live Interactive Sessions",
    "24/7 Community Support",
    "Industry-Standard Tools & Technologies",
    "Career Guidance & Job Placement Support",
    "Lifetime Access to Course Materials",
    "GitHub Portfolio Setup",
    "Real-World Project Experience",
    "Certificate of Completion"
  ];

  return (
    <section id="pricing" className="section-padding bg-dark-800">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Enroll Now</span>
          </h2>
          <div className="w-24 h-1 bg-primary-red mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Invest in your future with comprehensive DevOps training that delivers real results.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-dark-900 to-dark-700 rounded-2xl overflow-hidden border-2 border-primary-red shadow-2xl">
            <div className="bg-primary-red text-white text-center py-4">
              <div className="flex items-center justify-center">
                <Star className="w-5 h-5 mr-2" />
                <span className="font-semibold">Limited Time Offer</span>
                <Star className="w-5 h-5 ml-2" />
              </div>
            </div>

            <div className="p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-3xl font-bold mb-6 text-white">
                    The Project Web Series
                  </h3>
                  <p className="text-gray-300 mb-8 text-lg">
                    Complete DevOps & Cloud mastery program with hands-on projects, 
                    expert mentorship, and career support.
                  </p>

                  <div className="space-y-4">
                    {features.slice(0, 5).map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <Check className="w-5 h-5 text-primary-red mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 p-6 bg-dark-800 rounded-lg border border-primary-red/20">
                    <div className="flex items-center mb-3">
                      <Clock className="w-5 h-5 text-primary-red mr-2" />
                      <span className="font-semibold text-white">Course Duration</span>
                    </div>
                    <p className="text-gray-300">Intensive 1-week program with lifetime access</p>
                  </div>
                </div>

                <div className="text-center">
                  <div className="bg-dark-900 p-8 rounded-lg border border-primary-red/30 mb-8">
                    <div className="mb-6">
                      <div className="text-gray-400 text-lg mb-2">Investment</div>
                      <div className="text-4xl font-bold text-white mb-2">
                        Contact for <span className="text-primary-red">Details</span>
                      </div>
                      <div className="text-gray-400">Flexible payment options available</div>
                    </div>

                    <button 
                      onClick={handleBookNow}
                      className="btn-primary w-full text-xl py-4 mb-6 animate-pulse-glow"
                    >
                      Book Your Seat Now
                    </button>

                    <div className="flex items-center justify-center text-gray-400 mb-4">
                      <Users className="w-4 h-4 mr-2" />
                      <span className="text-sm">Limited seats available</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-center text-gray-300">
                      <Mail className="w-5 h-5 text-primary-red mr-3" />
                      <span>info@projectwebseries.com</span>
                    </div>
                    <div className="flex items-center justify-center text-gray-300">
                      <Phone className="w-5 h-5 text-primary-red mr-3" />
                      <span>+91-XXXXXXXXXX</span>
                    </div>
                  </div>

                  <div className="mt-6 text-center">
                    <p className="text-sm text-gray-400">
                      Secure payment processing by Razorpay
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-dark-700 p-6 rounded-lg">
              <div className="text-2xl font-bold text-primary-red mb-2">100%</div>
              <div className="text-gray-300">Hands-On Learning</div>
            </div>
            <div className="bg-dark-700 p-6 rounded-lg">
              <div className="text-2xl font-bold text-primary-red mb-2">24/7</div>
              <div className="text-gray-300">Support Access</div>
            </div>
            <div className="bg-dark-700 p-6 rounded-lg">
              <div className="text-2xl font-bold text-primary-red mb-2">∞</div>
              <div className="text-gray-300">Lifetime Access</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;