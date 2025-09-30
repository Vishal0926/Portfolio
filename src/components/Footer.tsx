import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-slate-300">
              © {currentYear} Bishal Swain. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-2 text-slate-300">
            <span>Made with</span>
            <Heart size={16} className="text-red-500 fill-red-500" />
            <span>by Bishal Swain</span>
          </div>
        </div>
      </div>
    </footer>
  );
}