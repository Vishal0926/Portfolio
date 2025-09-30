import { GraduationCap, Calendar, Award } from 'lucide-react';

export default function Education() {
  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science Engineering',
      institution: 'Chandigarh University',
      location: 'Gharuan, Punjab',
      duration: '2022 - 2026',
      score: '7.89 SGPA (Current)',
      icon: GraduationCap,
    },
    {
      degree: 'ISC Intermediate (Class 12th)',
      institution: "Desouza's School",
      location: 'Rourkela, Odisha',
      duration: '2021',
      score: '65%',
      icon: Award,
    },
    {
      degree: 'ICSE Matriculation (Class 10th)',
      institution: "Desouza's School",
      location: 'Rourkela, Odisha',
      duration: '2018',
      score: '73%',
      icon: Award,
    },
  ];

  const certifications = [
    {
      name: 'Data Structure Certification',
      platform: 'Coursera',
    },
    {
      name: 'Full Stack Web Development',
      platform: 'Udemy',
    },
    {
      name: 'Academic Paper Writing (Research work)',
      platform: 'LinkedIn',
    },
  ];

  return (
    <section id="education" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">Education</h2>
        <div className="w-20 h-1 bg-slate-800 mx-auto mb-12"></div>

        <div className="space-y-6 mb-16">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-100 rounded-lg">
                  <edu.icon className="w-8 h-8 text-slate-800" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{edu.degree}</h3>
                  <p className="text-lg text-slate-700 mb-2">{edu.institution}</p>
                  <div className="flex flex-wrap gap-4 text-slate-600">
                    <span className="flex items-center gap-1">
                      <Calendar size={16} />
                      {edu.duration}
                    </span>
                    <span>📍 {edu.location}</span>
                    <span className="font-semibold text-slate-800">Score: {edu.score}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center"
              >
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">{cert.name}</h4>
                <p className="text-slate-600">{cert.platform}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}