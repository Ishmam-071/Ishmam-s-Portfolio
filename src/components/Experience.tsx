import React from 'react';

const Experience = () => {
  const experiences = [
    // {
    //   company: 'Tech Corp',
    //   position: 'Software Engineering Intern',
    //   period: 'Jun 2023 - Aug 2023',
    //   description: 'Developed and maintained full-stack web applications using React and Node.js. Collaborated with senior developers on implementing new features and fixing bugs.',
    // },
    // {
    //   company: 'StartUp Inc',
    //   position: 'Frontend Developer (Part-time)',
    //   period: 'Jan 2023 - May 2023',
    //   description: 'Led the development of responsive user interfaces using React and TypeScript. Implemented modern design patterns and best practices.',
    // },
    {
      company: 'University Projects',
      position: 'Team Lead',
      period: '2023 - Present',
      description: 'I build it by myself. I learnt whenever it is necessary to learn a new technology',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Experience</h2>
        
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div key={exp.company} className="card">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{exp.company}</h3>
                  <p className="text-blue-400">{exp.position}</p>
                </div>
                <span className="text-gray-400 text-sm">{exp.period}</span>
              </div>
              <p className="text-gray-300">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;