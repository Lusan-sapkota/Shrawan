import { Heart, Sparkles, Leaf } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-emerald-900 via-green-800 to-emerald-900 text-white py-16 px-4 relative overflow-hidden">
      
      {/* Background animation elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 animate-float">
          <Leaf className="w-8 h-8 text-emerald-300" />
        </div>
        <div className="absolute top-20 right-20 animate-float-delayed">
          <Heart className="w-6 h-6 text-rose-300" fill="currentColor" />
        </div>
        <div className="absolute bottom-16 left-1/4 animate-float">
          <Sparkles className="w-6 h-6 text-amber-300" />
        </div>
        <div className="absolute bottom-20 right-1/3 animate-float-delayed">
          <Leaf className="w-7 h-7 text-emerald-300" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        {/* Main romantic quote */}
        <div className="mb-8">
          <blockquote className="text-2xl md:text-3xl font-light italic leading-relaxed mb-4">
            "Love knows no distance, no time, no boundaries."
          </blockquote>
          <p className="text-emerald-300 text-lg">
            — A promise written in the stars
          </p>
        </div>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-4 my-8">
          <div className="h-px bg-gradient-to-r from-transparent via-emerald-300 to-transparent w-24"></div>
          <Heart className="text-rose-400 w-6 h-6 animate-pulse" fill="currentColor" />
          <div className="h-px bg-gradient-to-r from-transparent via-emerald-300 to-transparent w-24"></div>
        </div>

        {/* shrawan blessing */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-emerald-400/20">
          <p className="text-emerald-200 text-lg leading-relaxed">
            May this shrawan month bring you endless blessings, joy, and the fulfillment of all your heart's desires. 
            Until we meet again, you carry my love with you always.
          </p>
        </div>

        {/* Animated hearts */}
        <div className="flex justify-center gap-2 mb-6">
          <Heart className="text-rose-400 w-5 h-5 animate-ping" fill="currentColor" />
          <Heart className="text-pink-400 w-6 h-6 animate-pulse" fill="currentColor" />
          <Heart className="text-rose-400 w-5 h-5 animate-ping animation-delay-300" fill="currentColor" />
        </div>

        {/* Final message */}
        <p className="text-emerald-200 text-sm opacity-80">
          Made with 💚 for the most beautiful person in my world
        </p>
        
        {/* Year */}
        <p className="text-emerald-400 text-xs mt-4 opacity-60">
          {new Date().getFullYear()} • A Digital Love Letter
        </p>
      </div>


    </footer>
  );
};

export default Footer;