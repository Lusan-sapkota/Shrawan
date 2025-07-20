import { Card, CardContent } from '@/components/ui/card';
import { Sparkles, Heart, Gift } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import henna from '/assets/henna.png'; 
import pearl from '/assets/pearl.png';
import floral from '/assets/floral.png';
import bangles from '/assets/bangles.png';
import anklet from '/assets/anklets.png';
import us from '/assets/us.jpg';

const GiftGallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [tappedCards, setTappedCards] = useState<Set<number>>(new Set());

  const giftItems = [
    {
      id: 1,
      name: 'Green Bangles',
      description: 'Gold-plated bangles that sing with movement',
      image: bangles,
      color: 'from-amber-400 to-yellow-600',
      sweetNote: 'These bangles will dance with your hands 💚'
    },
    {
      id: 2,
      name: 'Pearl Earrings',
      description: 'Elegant pearls that frame your face',
      image: pearl,
      color: 'from-rose-400 to-pink-600',
      sweetNote: 'Pearls as precious as your smile, my darling ✨'
    },
    {
      id: 3,
      name: 'Mehendi Kit',
      description: 'Henna designs for your hands',
      image: henna,
      color: 'from-emerald-400 to-green-600',
      sweetNote: 'Sacred art painted with all my love 🎨'
    },
    {
      id: 4,
      name: 'Floral Clips',
      description: 'Flowers to adorn your hair',
      image: floral,
      color: 'from-purple-400 to-indigo-600',
      sweetNote: 'Beautiful flowers for my most precious flower 🌸'
    },
    {
      id: 5,
      name: 'Silver Anklet',
      description: 'Anklets that announce your steps',
      image: anklet,
      color: 'from-cyan-400 to-blue-600',
      sweetNote: 'Sweet music with every graceful step, my love 🎵'
    },

    {
      id: 6,
      name: 'Us Card',
      description: 'A card celebrating our bond',
      image: us,
      color: 'from-pink-400 to-red-600',
      sweetNote: 'Together in heart and soul, The greatest gift 💖'
    }

  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6
      }
    }
  };
  return (
    <section ref={ref} className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="text-rose-500 w-6 h-6" fill="currentColor" />
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-700 via-amber-600 to-rose-700 bg-clip-text text-transparent">
              Your shrawan Collection
            </h2>
            <Heart className="text-rose-500 w-6 h-6" fill="currentColor" />
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Each piece chosen with endless love, carrying my heart's deepest wishes for your happiness
          </p>
        </motion.div>

        {/* Gift items grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {giftItems.map((item) => (
            <motion.div
              key={item.id} 
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <Card 
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm relative cursor-pointer"
                onClick={() => {
                  setTappedCards(prev => new Set([...prev, item.id]));
                }}
              >
                
                {/* Full card overlay for mobile tap / desktop hover */}
                <div className={`absolute inset-0 bg-gradient-to-br from-rose-500/95 via-pink-500/95 to-emerald-500/95 backdrop-blur-sm flex items-center justify-center transition-all duration-700 z-20 ${tappedCards.has(item.id) ? 'opacity-0 pointer-events-none' : 'opacity-100 md:opacity-100 md:group-hover:opacity-0'}`}>
                  <div className="text-center text-white transform scale-95 group-hover:scale-100 transition-transform duration-500">
                    <motion.div
                      animate={{ 
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="mb-4"
                    >
                      <Heart className="w-12 h-12 mx-auto animate-pulse" fill="currentColor" />
                    </motion.div>
                    <p className="text-lg font-bold tracking-wide mb-2">
                      <span className="md:hidden">Tap to reveal</span>
                      <span className="hidden md:inline">Hover to reveal</span>
                    </p>
                    <p className="text-sm opacity-90">my sweet message</p>
                  </div>
                </div>

                {/* Floating love particles on hover (when revealed) */}
                <div className={`absolute inset-0 pointer-events-none transition-opacity duration-500 z-10 ${tappedCards.has(item.id) ? 'opacity-100 group-hover:opacity-100' : 'opacity-0'}`}>
                  <Heart className="absolute top-4 right-4 text-rose-400 w-4 h-4 animate-heartbeat" fill="currentColor" />
                  <Sparkles className="absolute top-6 left-4 text-amber-400 w-3 h-3 animate-gentle-bounce" />
                  <Heart className="absolute bottom-6 right-6 text-pink-400 w-3 h-3 animate-heartbeat animation-delay-300" fill="currentColor" />
                  <Sparkles className="absolute bottom-4 left-4 text-emerald-400 w-3 h-3 animate-gentle-bounce animation-delay-600" />
                  <Gift className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-rose-300 w-6 h-6 animate-pulse opacity-20" />
                </div>

                <div className="relative overflow-hidden">
                  {/* Romantic glow overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-15 transition-opacity duration-500 z-10`}></div>
                  
                  {/* Image container with loving frame effect */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Romantic decorative border */}
                    <div className="absolute inset-4 border-2 border-white/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Love sparkle effect */}
                    <Sparkles className="absolute top-4 right-4 text-white w-6 h-6 opacity-0 group-hover:opacity-100 animate-gentle-bounce transition-opacity duration-500" />
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-emerald-700 transition-colors duration-300">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                  
                  {/* Sweet love note - always visible when card is revealed */}
                  <div className={`transition-all duration-700 ${tappedCards.has(item.id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <div className="bg-gradient-to-r from-rose-100 via-emerald-100 to-amber-100 p-4 rounded-lg border border-rose-200 shadow-sm">
                      <div className="text-center mb-3">
                        <Heart className="w-5 h-5 mx-auto text-rose-500 animate-heartbeat" fill="currentColor" />
                      </div>
                      <p className="text-emerald-800 text-sm italic font-medium text-center leading-relaxed">
                        {item.sweetNote}
                      </p>
                    </div>
                  </div>
                  
                  {/* Romantic decorative separator */}
                  <div className="mt-4 h-1 bg-gradient-to-r from-transparent via-rose-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GiftGallery;