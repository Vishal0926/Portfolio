import { Mail, Phone, MapPin, Github, Linkedin, Download } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'swainbishal0926@gmail.com',
      link: 'mailto:swainbishal0926@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '7848081731',
      link: 'tel:7848081731',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Kharar, Punjab - 140413',
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      url: 'https://github.com/Vishal0926',
      color: 'hover:bg-slate-700',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/bishal-swain-35421a272/',
      color: 'hover:bg-blue-700',
    },
  ];

  const handleDownloadResume = () => {
    // Create a simple text file with resume information
    const resumeContent = `
BISHAL SWAIN
Software Developer

Contact Information:
Email: swainbishal0926@gmail.com
Phone: 7848081731
Location: Kharar, Punjab - 140413
LinkedIn: https://www.linkedin.com/in/bishal-swain-35421a272/
GitHub: https://github.com/Vishal0926

PROFESSIONAL SUMMARY
Passionate software developer with a strong foundation in coding, problem-solving, and emerging technologies.
Dedicated to building impactful software applications while contributing to dynamic team environments.
Committed to continuous learning and innovation to drive efficient and scalable solutions.

EDUCATION
Bachelor of Technology in Computer Science Engineering
Chandigarh University, Gharuan | 2022-2026 | SGPA: 7.89

ISC Intermediate | Desouza's School, Rourkela | 2021 | 65%
ICSE Matriculation | Desouza's School, Rourkela | 2018 | 73%

TECHNICAL SKILLS
Programming: Java, JavaScript, C++, HTML, CSS, React
Databases: MySQL, MongoDB, SQL, RDBMS
Tools: Git, GitHub, Visual Studio Code, IntelliJ
Concepts: Data Structures & Algorithms, Object Oriented Development, Web Development

PROJECTS
1. Swain Furniture (React)
   - Personalized e-commerce furniture platform
   - High-quality visuals and user-friendly navigation

2. Placement Management System (HTML, CSS, MongoDB)
   - Comprehensive CRUD functionality
   - Skills-based placement search

3. Bank Management System (Java, MySQL)
   - Full-fledged CRUD operations
   - Menu-driven interface

CERTIFICATIONS
- Data Structure Certification (Coursera)
- Full Stack Web Development (Udemy)
- Academic Paper Writing (LinkedIn)

INTERPERSONAL SKILLS
Team Collaboration | Problem-Solving | Adaptability | Time Management
    `;

    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Bishal_Swain_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">Get In Touch</h2>
        <div className="w-20 h-1 bg-slate-800 mx-auto mb-12"></div>

        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg text-slate-700 leading-relaxed mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            Feel free to reach out through any of the channels below.
          </p>

          <button
            onClick={handleDownloadResume}
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors shadow-lg hover:shadow-xl font-semibold"
          >
            <Download size={20} />
            Download Resume
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-slate-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <info.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">{info.label}</h3>
              {info.link ? (
                <a
                  href={info.link}
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                >
                  {info.value}
                </a>
              ) : (
                <p className="text-slate-600">{info.value}</p>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Connect With Me</h3>
          <div className="flex justify-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-6 py-3 bg-slate-800 text-white rounded-lg ${social.color} transition-colors shadow-md hover:shadow-lg`}
                aria-label={social.label}
              >
                <social.icon size={20} />
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}