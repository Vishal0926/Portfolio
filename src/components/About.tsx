import { Users, Lightbulb, Clock, Target } from 'lucide-react';

export default function About() {
  const interpersonalSkills = [
    { icon: Users, name: 'Team Collaboration', description: 'Effective collaboration in dynamic team environments' },
    { icon: Lightbulb, name: 'Problem-Solving', description: 'Analytical approach to complex challenges' },
    { icon: Target, name: 'Adaptability', description: 'Quick adaptation to new technologies and methodologies' },
    { icon: Clock, name: 'Time Management', description: 'Efficient task prioritization and deadline management' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">About Me</h2>
        <div className="w-20 h-1 bg-slate-800 mx-auto mb-12"></div>

        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            I'm a passionate software developer currently pursuing BTech in Computer Science and Engineering
            at Chandigarh University. With a strong foundation in programming languages like Java, JavaScript,
            and modern web technologies, I'm dedicated to building efficient and scalable software solutions.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            My journey in software development is driven by curiosity and a commitment to continuous learning.
            I thrive on solving complex problems and contributing to projects that make a real impact. Whether
            it's developing web applications or working with databases, I approach every challenge with enthusiasm
            and attention to detail.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Interpersonal Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {interpersonalSkills.map((skill, index) => (
              <div
                key={index}
                className="p-6 bg-slate-50 rounded-lg hover:shadow-lg transition-shadow"
              >
                <skill.icon className="w-10 h-10 text-slate-800 mb-4" />
                <h4 className="text-lg font-semibold text-slate-900 mb-2">{skill.name}</h4>
                <p className="text-slate-600 text-sm">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}