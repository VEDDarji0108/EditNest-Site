import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';

export const StickyCTA = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 md:bottom-8 md:right-8">
      <Link
        to="/contact"
        className="group flex items-center gap-3 rounded-full bg-gradient-to-r from-hotPink via-sunshine to-surf px-6 py-3 text-sm font-semibold text-white shadow-2xl shadow-hotPink/40 transition-all hover:scale-105 hover:shadow-hotPink/50 md:px-8 md:py-4 md:text-base"
      >
        <MessageCircle className="h-5 w-5 md:h-6 md:w-6" />
        <span className="hidden sm:inline">Book Strategy Call</span>
        <span className="sm:hidden">Book Call</span>
      </Link>
    </div>
  );
};

