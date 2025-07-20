import { Card, CardContent } from '@/components/ui/card';
import { Heart, Flower, Feather } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const LoveLetter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [typingComplete, setTypingComplete] = useState(false);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setTypingComplete(true), 2000);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  const letterParagraphs = [
    "My dearest love, as the holy month of shrawan paints the world in colors of devotion and celebration, I find my heart overflowing with thoughts of you. Though miles stretch between us like an endless ocean, every prayer I whisper carries your name, every wish I make is for your happiness.",
    "I close my eyes and imagine you adorned in these beautiful treasures - the golden bangles creating sweet music as you move, the pearls reflecting the sparkle in your eyes, the mehendi blooming on your hands like poetry written in henna. Each piece isn't just an ornament, my darling, it's a piece of my heart wrapped in tradition and love.",
    "This sacred shrawan, may every blessing find its way to you. May Lord Shiva shower you with joy that knows no bounds, health that glows from within, and dreams that dance into reality. May the sacred thread be a shield of protection around you, and may the flowers in your hair remind you that even from afar, I'm sending you all the beauty this world has to offer.",
    "Until the day I can hold you close again, until I can see your smile light up the room, until I can whisper these words directly into your ear - know this: you are loved beyond the capacity of words, missed beyond the measure of time, and treasured beyond the vastness of the universe itself."
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.8,
        delayChildren: 0.5
      }
    }
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1
      }
    }
  };
  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-br from-rose-50 via-pink-50 to-emerald-50">
      <div className="max-w-4xl mx-auto">
        
        {/* Section header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Flower className="text-rose-500 w-6 h-6" />
            <motion.h2 
              className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-emerald-600 bg-clip-text text-transparent"
              initial={{ scale: 0.8 }}
              animate={isInView ? { scale: 1 } : { scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              From Me to You
            </motion.h2>
            <Flower className="text-rose-500 w-6 h-6" />
          </div>
          <p className="text-gray-600 italic">A handwritten letter from my heart to yours, across the miles</p>
        </motion.div>

        {/* Love letter card */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.95 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
        <Card className="bg-white/90 backdrop-blur-sm border-2 border-rose-200 shadow-2xl overflow-hidden relative">
          
          {/* Floating love elements */}
          <div className="absolute inset-0 pointer-events-none opacity-10">
            <Heart className="absolute top-8 right-8 text-rose-300 w-8 h-8 animate-heartbeat" fill="currentColor" />
            <Feather className="absolute top-16 left-8 text-amber-300 w-6 h-6 animate-float-delayed" />
            <Flower className="absolute bottom-16 right-16 text-emerald-300 w-6 h-6 animate-gentle-bounce" />
            <Heart className="absolute bottom-8 left-16 text-pink-300 w-5 h-5 animate-heartbeat animation-delay-600" fill="currentColor" />
          </div>

          <div className="bg-gradient-to-r from-rose-100 via-pink-50 to-emerald-100 p-1">
            <CardContent className="bg-white m-2 rounded-lg p-8 md:p-12 relative">
              
              {/* Romantic decorative elements */}
              <div className="absolute top-4 left-4 opacity-20">
                <Heart className="text-rose-300 w-8 h-8" fill="currentColor" />
              </div>
              <div className="absolute top-4 right-4 opacity-20">
                <Feather className="text-amber-300 w-8 h-8" />
              </div>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-20">
                <Flower className="text-emerald-300 w-6 h-6" />
              </div>

              {/* Letter content */}
              <motion.div 
                className="space-y-6 text-gray-700 leading-relaxed font-serif"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                <motion.div 
                  className="text-right text-emerald-600 italic font-light"
                  variants={paragraphVariants}
                >
                  Written during this sacred shrawan month, with all my love...
                </motion.div>

                <motion.p 
                  className="text-xl font-medium text-rose-700 relative font-serif"
                  variants={paragraphVariants}
                  style={{ fontFamily: "'Dancing Script', cursive" }}
                >
                  My Dearest Love,
                  
                  {/* Animated romantic underline */}
                  <motion.div
                    className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-rose-400 via-pink-400 to-emerald-400 rounded-full"
                    initial={{ width: 0 }}
                    animate={typingComplete ? { width: "100%" } : { width: 0 }}
                    transition={{ duration: 1.5, delay: 2.5 }}
                  />
                </motion.p>

                {letterParagraphs.map((paragraph, index) => (
                  <motion.p 
                    key={index}
                    className="text-base md:text-lg leading-relaxed"
                    variants={paragraphVariants}
                  >
                    {paragraph}
                  </motion.p>
                ))}

                <motion.div 
                  className="border-t-2 border-gradient-to-r from-rose-200 via-emerald-200 to-amber-200 pt-6 mt-8"
                  variants={paragraphVariants}
                >
                  <p className="italic text-emerald-700 text-center text-lg font-medium">
                    "In every prayer I whisper, in every star I wish upon, in every beat of my heart - there you are, my love."
                  </p>
                </motion.div>

                <motion.p 
                  className="text-right text-rose-700 font-medium text-xl relative"
                  variants={paragraphVariants}
                  style={{ fontFamily: "'Dancing Script', cursive" }}
                >
                  Forever yours,<br />
                  <span className="text-2xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-emerald-600 bg-clip-text text-transparent">
                    Your Loving Partner ❤️
                  </span>
                  
                  {/* Animated love heart next to signature */}
                  <motion.div
                    className="absolute -right-10 top-1/2 transform -translate-y-1/2"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={typingComplete ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ duration: 0.8, delay: 3.5 }}
                  >
                    <Heart className="text-rose-500 w-8 h-8 animate-heartbeat" fill="currentColor" />
                  </motion.div>
                </motion.p>
              </motion.div>

              {/* Bottom decoration */}
              <motion.div 
                className="mt-8 flex justify-center"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1.5, delay: 4 }}
              >
                <div className="flex gap-2">
                  <Heart className="text-rose-400 w-4 h-4 animate-heartbeat" fill="currentColor" />
                  <Heart className="text-pink-400 w-6 h-6 animate-heartbeat animation-delay-300" fill="currentColor" />
                  <Heart className="text-emerald-400 w-5 h-5 animate-heartbeat animation-delay-600" fill="currentColor" />
                  <Heart className="text-rose-400 w-4 h-4 animate-heartbeat animation-delay-900" fill="currentColor" />
                </div>
              </motion.div>
            </CardContent>
          </div>
        </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default LoveLetter;