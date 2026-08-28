import { Instagram, Facebook, Mail, MessageCircle } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  // TikTok Custom Icon (Lucide doesn't have a direct TikTok icon usually, using SVG)
  const TikTokIcon = ({ className }: { className?: string }) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
    </svg>
  );

  return (
    <footer id="contact" className="pt-20 pb-10 border-t border-black/10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 mb-16">
          <div>
            <h3 className="text-2xl font-light tracking-wide mb-2 flex items-center gap-2 text-gray-900">
              <span className="w-4 h-4 rounded-full bg-purple-accent"></span>
              Rareonix Media
            </h3>
            <p className="text-gray-600 font-light text-sm">We Create Content That Grows Brands.</p>
          </div>

          <div className="flex gap-4">
            <a href="https://wa.me/923498545749" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-black/5 border border-black/10 flex items-center justify-center text-gray-500 hover:text-purple-accent hover:bg-purple-accent/10 transition-colors shadow-sm" aria-label="WhatsApp">
              <MessageCircle size={18} />
            </a>
            <a href="mailto:rareify963@gmail.com" className="w-10 h-10 rounded-full bg-black/5 border border-black/10 flex items-center justify-center text-gray-500 hover:text-purple-accent hover:bg-purple-accent/10 transition-colors shadow-sm" aria-label="Email">
              <Mail size={18} />
            </a>
            <a href="https://www.instagram.com/rareify_/?hl=en" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-black/5 border border-black/10 flex items-center justify-center text-gray-500 hover:text-purple-accent hover:bg-purple-accent/10 transition-colors shadow-sm" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61586961090924" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-black/5 border border-black/10 flex items-center justify-center text-gray-500 hover:text-purple-accent hover:bg-purple-accent/10 transition-colors shadow-sm" aria-label="Facebook">
              <Facebook size={18} />
            </a>
            <button type="button" onClick={(e) => e.preventDefault()} className="w-10 h-10 rounded-full bg-black/5 border border-black/10 flex items-center justify-center text-gray-500 hover:text-purple-accent hover:bg-purple-accent/10 transition-colors shadow-sm cursor-default" aria-label="TikTok (Coming Soon)">
              <TikTokIcon className="w-[18px] h-[18px]" />
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-black/10 text-xs text-gray-500">
          <p>&copy; {currentYear} Rareonix Media. All rights reserved.</p>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="mt-4 md:mt-0 hover:text-gray-900 transition-colors"
          >
            Back to Top &uarr;
          </button>
        </div>
      </div>
    </footer>
  );
}
