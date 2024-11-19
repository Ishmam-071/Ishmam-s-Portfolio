import React from 'react';

const Skills = () => {
  const skills = {
    'Frontend': ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
    'Backend': ['Node.js', 'Express', 'PostgreSQL', 'MongoDB','Python','Django'],
    'Tools': ['Git', 'Docker'],
    'Soft Skills': ['Problem Solving', 'Team Leadership', 'Communication', 'Agile'],
  };

  return (
    <section id="skills" className="py-20 bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Skills</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="card">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Skills;