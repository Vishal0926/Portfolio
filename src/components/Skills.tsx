import { Code2, Database, Wrench, BookOpen } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code2,
      skills: ['Java', 'JavaScript', 'C++', 'HTML & CSS', 'React'],
      color: 'bg-blue-50',
      iconColor: 'text-blue-600',
    },
    {
      title: 'Databases',
      icon: Database,
      skills: ['MySQL', 'MongoDB', 'SQL', 'RDBMS'],
      color: 'bg-green-50',
      iconColor: 'text-green-600',
    },
    {
      title: 'Tools & Technologies',
      icon: Wrench,
      skills: ['Git', 'GitHub', 'Visual Studio Code', 'IntelliJ'],
      color: 'bg-orange-50',
      iconColor: 'text-orange-600',
    },
    {
      title: 'Concepts',
      icon: BookOpen,
      skills: ['Data Structures & Algorithms', 'Object Oriented Development', 'Web Development', 'Problem Solving'],
      color: 'bg-slate-50',
      iconColor: 'text-slate-600',
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">Skills</h2>
        <div className="w-20 h-1 bg-slate-800 mx-auto mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`${category.color} p-8 rounded-lg hover:shadow-xl transition-shadow`}
            >
              <div className="flex items-center gap-3 mb-6">
                <category.icon className={`w-8 h-8 ${category.iconColor}`} />
                <h3 className="text-2xl font-semibold text-slate-900">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-white text-slate-800 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-slate-600">
            Continuously learning and expanding my skill set to stay current with emerging technologies
          </p>
        </div>
      </div>
    </section>
  );
}