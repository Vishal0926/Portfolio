import { ExternalLink, Calendar } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Swain Furniture',
      technologies: ['React', 'JavaScript', 'HTML', 'CSS'],
      description: 'Personalized e-commerce furniture platform featuring homepage and product sections with high-quality visuals and user-friendly navigation. Built with modern web technologies to deliver a seamless shopping experience.',
      duration: 'Personal Project',
      highlights: [
        'Responsive design for all devices',
        'High-quality product visuals',
        'Intuitive user interface',
        'Modern e-commerce features',
      ],
    },
    {
      title: 'Placement Management System',
      technologies: ['HTML', 'CSS', 'MongoDB'],
      description: 'Comprehensive platform to manage placement activities with full CRUD functionality. An effective solution to search for placements according to skills, helping students and recruiters connect efficiently.',
      duration: 'Aug 2023 - Oct 2024',
      highlights: [
        'CRUD operations for placement data',
        'Skills-based search functionality',
        'Design, coding, and testing contributions',
        'Analysis of outcomes and optimization',
      ],
    },
    {
      title: 'Bank Management System',
      technologies: ['Java', 'MySQL'],
      description: 'Advanced and effective bank management system with full-fledged CRUD operations. Features a menu-driven interface for easy navigation and comprehensive banking operations management.',
      duration: 'June 2022 - Aug 2023',
      highlights: [
        'Complete CRUD functionality',
        'Menu-driven user interface',
        'Database integration with MySQL',
        'Secure transaction handling',
      ],
    },
  ];

  const training = [
    {
      title: 'Chandigarh University | Inhouse Training',
      duration: 'June 2023 - July 2023',
      description: 'Intensive training on Data Structures and Algorithms with practical coding practice and project development.',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">Projects</h2>
        <div className="w-20 h-1 bg-slate-800 mx-auto mb-12"></div>

        <div className="space-y-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{project.title}</h3>
                  <div className="flex items-center gap-2 text-slate-600 mb-3">
                    <Calendar size={16} />
                    <span className="text-sm">{project.duration}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-slate-100 text-slate-800 rounded-md text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="text-slate-700 mb-4 leading-relaxed">{project.description}</p>

              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Key Highlights:</h4>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex items-start gap-2 text-slate-600">
                      <span className="text-slate-800 mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">Training & Experience</h3>
          {training.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <h4 className="text-xl font-semibold text-slate-900 mb-2">{item.title}</h4>
              <div className="flex items-center gap-2 text-slate-600 mb-3">
                <Calendar size={16} />
                <span className="text-sm">{item.duration}</span>
              </div>
              <p className="text-slate-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}