import { Heart, Sparkles, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const HeartfeltMessage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-br from-emerald-900 via-green-800 to-amber-900 relative overflow-hidden">
      
      {/* Romantic background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-emerald-300 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-32 right-16 w-48 h-48 bg-amber-300 rounded-full blur-2xl animate-pulse animation-delay-300"></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-rose-300 rounded-full blur-3xl animate-pulse animation-delay-600"></div>
        <div className="absolute bottom-32 right-20 w-56 h-56 bg-pink-300 rounded-full blur-2xl animate-pulse animation-delay-900"></div>
      </div>

      {/* Floating romantic particles */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <Heart className="absolute top-16 left-16 text-rose-300 w-6 h-6 animate-float" fill="currentColor" />
        <Leaf className="absolute top-32 right-32 text-emerald-300 w-8 h-8 animate-float-delayed" />
        <Sparkles className="absolute top-48 left-1/3 text-amber-300 w-5 h-5 animate-gentle-bounce" />
        <Heart className="absolute bottom-32 right-16 text-pink-300 w-7 h-7 animate-float" fill="currentColor" />
        <Leaf className="absolute bottom-48 left-20 text-green-300 w-6 h-6 animate-float-delayed" />
        <Sparkles className="absolute bottom-16 right-1/3 text-yellow-300 w-4 h-4 animate-gentle-bounce animation-delay-600" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        {/* Main heartfelt message */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
            
            {/* Decorative top element */}
            <motion.div 
              className="flex justify-center mb-8"
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="flex items-center gap-4">
                <Heart className="text-rose-300 w-8 h-8 animate-heartbeat" fill="currentColor" />
                <Sparkles className="text-amber-300 w-10 h-10 animate-gentle-bounce" />
                <Heart className="text-pink-300 w-8 h-8 animate-heartbeat animation-delay-300" fill="currentColor" />
              </div>
            </motion.div>

            {/* Main message */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
                This is not a shop,<br />
                <span className="bg-gradient-to-r from-rose-300 via-pink-300 to-emerald-300 bg-clip-text text-transparent">
                  not a portfolio
                </span>
              </h2>
              
              <motion.p 
                className="text-xl md:text-2xl text-emerald-100 mb-8 leading-relaxed font-light"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1, delay: 1.2 }}
              >
                Just a small piece of my heart<br />
                wrapped in a website
              </motion.p>
            </motion.div>

            {/* Romantic divider */}
            <motion.div 
              className="flex items-center justify-center gap-6 my-10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              <div className="h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent w-20"></div>
              <Heart className="text-rose-300 w-6 h-6 animate-pulse" fill="currentColor" />
              <div className="h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent w-20"></div>
            </motion.div>

            {/* Final loving message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 1, delay: 1.8 }}
            >
              <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-emerald-300 via-amber-300 to-rose-300 bg-clip-text text-transparent mb-4">
                Happy shrawan, my love 💚
              </p>
              
              <motion.p 
                className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto font-light"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1, delay: 2.2 }}
              >
                <>
                  May this remind you how much you mean to me,<br />
                  <span className="italic text-emerald-200">even from far away</span>
                </>
              </motion.p>
            </motion.div>

            {/* Bottom decorative hearts */}
            <motion.div 
              className="flex justify-center gap-3 mt-10"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1, delay: 2.5 }}
            >
              <Heart className="text-rose-300 w-5 h-5 animate-heartbeat" fill="currentColor" />
              <Heart className="text-pink-300 w-6 h-6 animate-heartbeat animation-delay-300" fill="currentColor" />
              <Heart className="text-emerald-300 w-7 h-7 animate-heartbeat animation-delay-600" fill="currentColor" />
              <Heart className="text-amber-300 w-6 h-6 animate-heartbeat animation-delay-900" fill="currentColor" />
              <Heart className="text-rose-300 w-5 h-5 animate-heartbeat animation-delay-300" fill="currentColor" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeartfeltMessage;