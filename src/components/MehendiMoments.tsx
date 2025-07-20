import { Card, CardContent } from '@/components/ui/card';
import { Heart, Sparkles, Flower2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import smile from '/assets/smile.jpg';
import handInHand from '/assets/together.jpg';
import futureDreams from '/assets/venue.jpg';

const MehendiMoments = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [tappedCards, setTappedCards] = useState<Set<number>>(new Set());

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  const handVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2
      }
    }
  };

const usMoments = [
  {
    id: 1,
    name: "Smile",
    description: "Your smile is the one that brightens my day",
    image: smile,
    sweetNote: "Your are my sunshine, even miles away ☀️"
  },
  {
    id: 2,
    name: "Hand in Hand",
    description: "Our hands held tight through every challenge",
    image: handInHand,
    sweetNote: "Holding your hand in spirit, always 🤝"
  },
  {
    id: 3,
    name: "Future Dreams",
    description: "Our hopes and plans for a beautiful tomorrow",
    image: futureDreams,
    sweetNote: "Dreaming together, forever and beyond 🌙"
  }
];

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 relative overflow-hidden">
      
      {/* Decorative background patterns */}
      <div className="absolute inset-0 opacity-5">
        {/* Traditional pattern backgrounds */}
        <div className="absolute top-20 left-10 w-32 h-32 border-4 border-amber-300 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border-2 border-rose-300 rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 border-3 border-emerald-300 rounded-full"></div>
        
        {/* Decorative leaf patterns */}
        <div className="absolute top-32 right-1/4">
          <div className="w-16 h-16 bg-gradient-to-br from-emerald-200 to-green-300 rounded-full opacity-30 blur-sm"></div>
        </div>
        <div className="absolute bottom-40 right-16">
          <div className="w-20 h-20 bg-gradient-to-br from-amber-200 to-orange-300 rounded-full opacity-30 blur-sm"></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section header */}
        <motion.div 
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div 
            className="flex items-center justify-center gap-3 mb-6"
            variants={itemVariants}
          >
            <Flower2 className="text-amber-600 w-8 h-8 animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-700 via-orange-600 to-rose-700 bg-clip-text text-transparent">
              US Moments
            </h2>
            <Flower2 className="text-amber-600 w-8 h-8 animate-pulse" />
          </motion.div>
          
          <motion.p 
            className="text-xl text-gray-700 font-medium max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Celebrating the beautiful moments we share, near or far
          </motion.p>
        </motion.div>

        {/* Mehendi showcase */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {usMoments.map((pattern) => (
            <motion.div
              key={pattern.id}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm relative">
                
                {/* Floating hearts on hover */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Heart className="absolute top-4 right-4 text-rose-400 w-4 h-4 animate-ping" fill="currentColor" />
                  <Sparkles className="absolute top-6 left-4 text-amber-400 w-3 h-3 animate-pulse" />
                  <Heart className="absolute bottom-6 right-6 text-pink-400 w-3 h-3 animate-bounce" fill="currentColor" />
                </div>

                <motion.div 
                  className="relative h-64 overflow-hidden"
                  variants={handVariants}
                >
                  {/* Shimmer effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out"></div>
                  
                  <img 
                    src={pattern.image} 
                    alt={pattern.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Traditional border overlay */}
                  <div className="absolute inset-4 border-2 border-amber-300/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </motion.div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-amber-700 transition-colors">
                    {pattern.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {pattern.description}
                  </p>
                  
                  {/* Sweet note area with overlays */}
                  <div 
                    className="relative min-h-[80px] flex items-end cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      setTappedCards(prev => new Set([...prev, pattern.id]));
                    }}
                  >
                    {/* Message area overlay for mobile tap / desktop hover */}
                    <div 
                      className={`absolute inset-0 bg-gradient-to-br from-amber-500/95 via-orange-500/95 to-rose-500/95 backdrop-blur-sm flex items-center justify-center transition-all duration-700 rounded-lg ${tappedCards.has(pattern.id) ? 'opacity-0 pointer-events-none' : 'opacity-100 md:opacity-100 md:group-hover:opacity-0'}`}
                    >
                      <div className="text-center text-white transform scale-95 group-hover:scale-100 transition-transform duration-500">
                        <motion.div
                          animate={{ 
                            scale: [1, 1.15, 1],
                            rotate: [0, 8, -8, 0]
                          }}
                          transition={{ 
                            duration: 2.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                          className="mb-3"
                        >
                          <Flower2 className="w-8 h-8 mx-auto animate-pulse" />
                        </motion.div>
                        <p className="text-sm font-bold tracking-wide mb-1">
                          <span className="md:hidden">Tap to reveal</span>
                          <span className="hidden md:inline">Hover to reveal</span>
                        </p>
                        <p className="text-xs opacity-90">our sweet memory</p>
                      </div>
                    </div>

                    {/* Sweet note revealed on hover/tap */}
                    <div className={`absolute inset-0 bg-gradient-to-br from-amber-100/95 via-orange-100/95 to-rose-100/95 backdrop-blur-sm flex items-center justify-center transition-all duration-700 rounded-lg ${tappedCards.has(pattern.id) ? 'opacity-100' : 'opacity-0 md:group-hover:opacity-100'}`}>
                      <div className={`text-center p-3 transform transition-all duration-700 ${tappedCards.has(pattern.id) ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'}`}>
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: tappedCards.has(pattern.id) ? 1 : 0 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                          className="mb-2"
                        >
                          <Sparkles className="w-5 h-5 mx-auto text-amber-500 animate-gentle-bounce" />
                        </motion.div>
                        <div className="bg-white/90 backdrop-blur-sm p-3 rounded-lg border border-amber-200 shadow-md">
                          <p className="text-amber-800 text-sm italic font-medium leading-relaxed">
                            {pattern.sweetNote}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Central decorative element */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-full p-8 shadow-xl border-2 border-amber-200 max-w-md mx-auto">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-3 h-3 bg-amber-500 rounded-full animate-pulse"></div>
              <div className="w-4 h-4 bg-rose-500 rounded-full animate-pulse animation-delay-300"></div>
              <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse animation-delay-600"></div>
            </div>
            <p className="text-amber-800 font-medium italic text-lg">
              "In every pattern, a prayer for your happiness"
            </p>
            <div className="mt-4 flex justify-center">
              <Heart className="text-rose-500 w-6 h-6 animate-pulse" fill="currentColor" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MehendiMoments;