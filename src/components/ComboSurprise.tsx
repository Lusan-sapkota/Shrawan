import { Card, CardContent } from '@/components/ui/card';
import { Gift, Sparkles, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import bangles from '/assets/bangles.png';
import pearl from '/assets/pearl.png';
import anklets from '/assets/anklets.png';
import us from '/assets/us.jpg';

const ComboSurprise = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section ref={ref} className="py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 bg-emerald-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-rose-300 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Animated section header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Gift className="text-emerald-600 w-8 h-8 animate-bounce" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 via-amber-600 to-rose-600 bg-clip-text text-transparent">
              The Complete Combo
            </h2>
            <Gift className="text-rose-600 w-8 h-8 animate-bounce" />
          </div>
          <p className="text-xl text-gray-700 font-medium">
            A curated collection of love, tradition, and celebration
          </p>
        </motion.div>

        {/* Main combo card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
        <Card className="bg-gradient-to-br from-white via-emerald-50 to-amber-50 border-2 border-emerald-200 shadow-2xl relative overflow-hidden">
          
          {/* Floating background elements */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <Heart className="absolute top-8 right-8 text-rose-300 w-6 h-6 animate-float" fill="currentColor" />
            <Sparkles className="absolute top-16 left-8 text-amber-300 w-5 h-5 animate-float-delayed" />
            <Heart className="absolute bottom-16 right-16 text-pink-300 w-4 h-4 animate-float" fill="currentColor" />
            <Sparkles className="absolute bottom-8 left-16 text-emerald-300 w-5 h-5 animate-float-delayed" />
          </div>

          <CardContent className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              
              {/* Left side - Image collage area */}
              <motion.div 
                className="relative"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                <motion.div className="grid grid-cols-2 gap-4">
                  {/* Placeholder for combo images */}
                  <motion.div 
                    className="relative group"
                    variants={imageVariants}
                    whileHover={{ 
                      scale: 1.05,
                      rotate: 2,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <img 
                      src={bangles} 
                      alt="Bangles"
                      className="w-full h-32 object-cover rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300"
                    />
                    <Sparkles className="absolute top-2 right-2 text-amber-400 w-4 h-4 animate-pulse" />
                    
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-200/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.div>
                  
                  <motion.div 
                    className="relative group mt-4"
                    variants={imageVariants}
                    whileHover={{ 
                      scale: 1.05,
                      rotate: -2,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <img 
                      src={pearl}
                      alt="Earrings"
                      className="w-full h-32 object-cover rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300"
                    />
                    <Heart className="absolute top-2 right-2 text-rose-400 w-4 h-4 animate-pulse" fill="currentColor" />
                    
                    <div className="absolute inset-0 bg-gradient-to-br from-rose-200/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.div>
                  
                  <motion.div 
                    className="relative group -mt-4"
                    variants={imageVariants}
                    whileHover={{ 
                      scale: 1.05,
                      rotate: 1,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <img 
                      src={anklets}
                      alt="Anklets"
                      className="w-full h-32 object-cover rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300"
                    />
                    <Sparkles className="absolute top-2 right-2 text-emerald-400 w-4 h-4 animate-pulse" />
                    
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-200/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.div>
                  
                  <motion.div 
                    className="relative group"
                    variants={imageVariants}
                    whileHover={{ 
                      scale: 1.05,
                      rotate: -1,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <img 
                      src={us}
                      alt="Us Together"
                      className="w-full h-32 object-cover rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300"
                    />
                    <Heart className="absolute top-2 right-2 text-purple-400 w-4 h-4 animate-pulse" fill="currentColor" />
                    
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-200/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.div>
                </motion.div>
                
                {/* Central decoration */}
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                >
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-lg border-2 border-emerald-200">
                    <Gift className="text-emerald-600 w-8 h-8 animate-pulse" />
                  </div>
                </motion.div>
              </motion.div>

              {/* Right side - Content */}
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight">
                  Your Complete shrawan Surprise Package
                </h3>
                
                <motion.div 
                  className="space-y-4"
                  variants={containerVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                >
                  <motion.div 
                    className="flex items-center gap-3"
                    variants={itemVariants}
                  >
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                    <span className="text-gray-700">Traditional Green Bangles</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center gap-3"
                    variants={itemVariants}
                  >
                    <div className="w-2 h-2 bg-rose-500 rounded-full animate-pulse"></div>
                    <span className="text-gray-700">Elegant Pearl Earrings</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center gap-3"
                    variants={itemVariants}
                  >
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                    <span className="text-gray-700">Silver Anklet (payal)</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center gap-3"
                    variants={itemVariants}
                  >
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-gray-700">Us together 🫂</span>
                  </motion.div>
                </motion.div>

                <motion.div 
                  className="bg-gradient-to-r from-emerald-100 to-amber-100 p-6 rounded-2xl border border-emerald-200"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  <p className="text-emerald-800 font-medium italic">
                    "Each piece in this collection represents a prayer, a wish, and a promise of love that transcends any distance between us."
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </CardContent>
        </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ComboSurprise;