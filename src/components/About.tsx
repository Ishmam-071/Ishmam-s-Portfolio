import React from 'react';
import { Code, Brain, Rocket } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="card">
            <Code className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Problem Solver</h3>
            <p className="text-gray-400">
              Passionate about solving complex problems through elegant and efficient solutions.
            </p>
          </div>
          
          <div className="card">
            <Brain className="w-8 h-8 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Quick Learner</h3>
            <p className="text-gray-400">
              Constantly learning new technologies and staying up-to-date with industry trends.
            </p>
          </div>
          
          <div className="card">
            <Rocket className="w-8 h-8 text-pink-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Team Player</h3>
            <p className="text-gray-400">
              Experienced in collaborative development and agile methodologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
