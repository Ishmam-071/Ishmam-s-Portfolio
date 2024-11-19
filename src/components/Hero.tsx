import React from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="text-center">
        <div className="mb-8 relative">
          <img
            src="https://avatars.githubusercontent.com/u/61260466?v=4"
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto border-4 border-blue-500/20"
          />
          <div className="absolute inset-0 rounded-full bg-blue-500/20 animate-pulse"></div>
        </div>
        
        <h1 className="text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Sahil Uddin Ishmam
          </span>
        </h1>
        
        <p className="text-xl text-gray-400 mb-8">
          Software Engineering Student
        </p>
        
        <div className="flex justify-center gap-4 mb-12">
          <a href="https://github.com/Sahil-Ishmam" className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/sahil-uddin-ishmam-8707301a3/" className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:sahiluddinishmam@gmail.com" className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
            <Mail className="w-6 h-6" />
          </a>
        </div>

        <a
          href="#about"
          className="animate-bounce inline-block"
          aria-label="Scroll to About section"
        >
          <ChevronDown className="w-8 h-8 text-blue-500" />
        </a>
      </div>
    </section>
  );
};


export default Hero;