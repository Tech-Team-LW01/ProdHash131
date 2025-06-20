import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Heart, Code } from 'lucide-react';
import { Link } from 'react-scroll';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', to: 'about' },
    { name: 'Projects', to: 'projects' },
    { name: 'Mentor', to: 'mentor' },
    { name: 'Outcomes', to: 'outcomes' },
    { name: 'Pricing', to: 'pricing' }
  ];

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: 'https://github.com', label: 'GitHub' },
    { icon: <Linkedin className="w-5 h-5" />, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <Twitter className="w-5 h-5" />, href: 'https://twitter.com', label: 'Twitter' }
  ];

  return (
    <footer className="bg-dark-900 border-t border-primary-red/20">
      <div className="container-custom">
        <div className="py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <Code className="w-8 h-8 text-primary-red mr-3" />
                <h3 className="text-2xl font-bold text-white">The Project Web Series</h3>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Master DevOps and Cloud technologies through hands-on projects. 
                Transform your career with industry-standard tools and expert mentorship.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-dark-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-red transition-all duration-300 card-hover"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.to}
                      smooth={true}
                      duration={500}
                      className="text-gray-400 hover:text-primary-red transition-colors duration-300 cursor-pointer"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Contact</h4>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-primary-red mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-400">Email</p>
                    <a 
                      href="mailto:info@projectwebseries.com" 
                      className="text-white hover:text-primary-red transition-colors duration-300"
                    >
                      info@projectwebseries.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-primary-red mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-400">WhatsApp</p>
                    <a 
                      href="https://wa.me/91XXXXXXXXXX" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-primary-red transition-colors duration-300"
                    >
                      +91-XXXXXXXXXX
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-primary-red mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-400">Location</p>
                    <p className="text-white">India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-dark-700 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-gray-400 mb-4 md:mb-0">
              <span>© {currentYear} The Project Web Series. Made with </span>
              <Heart className="w-4 h-4 text-primary-red mx-1" />
              <span> for aspiring DevOps engineers.</span>
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-primary-red transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-red transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-red transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;