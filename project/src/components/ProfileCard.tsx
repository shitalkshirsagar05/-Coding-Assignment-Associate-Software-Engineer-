import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const ProfileCard = () => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <div className="relative">
        <img
          className="w-full h-48 object-cover"
          src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=800&q=80"
          alt="Background"
        />
        <img
          className="absolute left-1/2 transform -translate-x-1/2 -bottom-16 w-32 h-32 rounded-full border-4 border-white object-cover"
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80"
          alt="Profile"
        />
      </div>
      
      <div className="pt-20 pb-6 px-6 text-center">
        <h3 className="text-xl font-semibold text-gray-900">Shital Kshirsagar</h3>
        <p className="text-sm text-gray-600 mt-1">Frontend Developer Intern </p>
        
        <p className="mt-4 text-gray-600">
        Building innovative web solutions with modern technologies. At Egatus Global pvt. Ltd we are committed to delivering cutting-edge solutions that empower businesses to thrive in the digital world.
        </p>
        
        <div className="mt-6 flex justify-center space-x-4">
          <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">
            <Twitter size={20} />
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-800 transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
            <Github size={20} />
          </a>
          <a href="#" className="text-gray-600 hover:text-red-500 transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;