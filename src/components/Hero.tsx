import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4">
            Bishal Swain
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-6">
            Software Developer | Problem Solver | Tech Enthusiast
          </p>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-8">
            Passionate about building impactful software applications with a strong foundation in coding,
            problem-solving, and emerging technologies. Committed to continuous learning and innovation.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <a
            href="mailto:swainbishal0926@gmail.com"
            className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors"
          >
            <Mail size={20} />
            Email Me
          </a>
          <a
            href="https://github.com/Vishal0926"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors"
          >
            <Github size={20} />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/bishal-swain-35421a272/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Linkedin size={20} />
            LinkedIn
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-slate-600">
          <div className="flex items-center gap-2">
            <MapPin size={18} />
            <span>Kharar, Punjab (from Rourkela, Odisha)</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={18} />
            <span>7848081731</span>
          </div>
        </div>

        <div className="mt-12">
          <a
            href="#about"
            className="inline-block animate-bounce"
          >
            <svg
              className="w-6 h-6 text-slate-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}