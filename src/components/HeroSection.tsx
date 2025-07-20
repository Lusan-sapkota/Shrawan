import { Heart, Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-200 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-16 w-24 h-24 bg-amber-200 rounded-full blur-2xl"></div>
        <div className="absolute bottom-32 left-20 w-40 h-40 bg-rose-200 rounded-full blur-3xl"></div>
      </div>

      <div className="text-center space-y-8 relative z-10 max-w-4xl mx-auto">
        {/* Main heading with sparkles */}
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Sparkles className="text-amber-500 w-8 h-8 animate-pulse" />
            <Heart className="text-rose-500 w-10 h-10 animate-pulse" fill="currentColor" />
            <Sparkles className="text-amber-500 w-8 h-8 animate-pulse" />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-emerald-600 via-green-700 to-emerald-800 bg-clip-text text-transparent leading-tight">
            Happy Shrawan,
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-rose-700 bg-clip-text text-transparent">
            My Love 💚
          </h2>
        </div>

        {/* Heartfelt message */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border border-emerald-100 max-w-2xl mx-auto">
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed font-medium">
            Even though miles separate us, my heart beats with yours during this sacred month of shrawan. 
            This digital surprise carries all my love, wishes, and dreams for you. 
          </p>
          <p className="text-emerald-700 text-base md:text-lg mt-4 italic">
            "Distance means nothing when someone means everything" 💕
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="mt-12 animate-bounce">
          <div className="w-6 h-10 border-2 border-emerald-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-emerald-400 rounded-full mt-2 animate-pulse"></div>
          </div>
          <p className="text-emerald-600 text-sm mt-2">Scroll for your surprise</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;