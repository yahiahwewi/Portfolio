import React from 'react';
import { Heart, Code, Coffee } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Yahya Houaoui
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Full-Stack Developer passionate about creating innovative solutions 
              that make a difference in the real world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#about" className="block text-gray-400 hover:text-white transition-colors duration-200">
                About Me
              </a>
              <a href="#skills" className="block text-gray-400 hover:text-white transition-colors duration-200">
                Skills
              </a>
              <a href="#projects" className="block text-gray-400 hover:text-white transition-colors duration-200">
                Projects
              </a>
              <a href="#internship" className="block text-gray-400 hover:text-white transition-colors duration-200">
                Experience
              </a>
              <a href="#contact" className="block text-gray-400 hover:text-white transition-colors duration-200">
                Contact
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-2">
              <p className="text-gray-400">
                <span className="font-medium">Email:</span> yahiahwewi@gmail.com
              </p>
              <p className="text-gray-400">
                <span className="font-medium">Location:</span> Tunisia
              </p>
              <p className="text-gray-400">
                <span className="font-medium">Education:</span> Esprit - 4SAE7
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 text-gray-400 mb-4 md:mb-0">
              <span>Made with</span>
              <Heart className="text-red-500" size={16} />
              <span>and</span>
              <Code className="text-blue-500" size={16} />
              <span>by Yahya Houaoui</span>
            </div>
            
            <div className="flex items-center gap-2 text-gray-400">
              <Coffee size={16} />
              <span>&copy; 2024 All rights reserved</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;