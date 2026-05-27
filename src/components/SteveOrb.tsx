import { motion, AnimatePresence } from 'framer-motion';
import { useSteve } from '../context/SteveContext';
import { Mic, MicOff } from 'lucide-react';

export const SteveOrb = () => {
  const { isListening, triggerSteve, isOffline } = useSteve();

  return (
    <div className="relative flex flex-col items-center justify-center py-12">
      <div 
        className="relative cursor-pointer group"
        onClick={() => !isListening && triggerSteve()}
      >
        {/* Outer Glow */}
        <motion.div
          animate={{
            scale: isListening ? [1, 1.2, 1] : 1,
            opacity: isListening ? [0.3, 0.6, 0.3] : 0.2,
          }}
          transition={{ repeat: Infinity, duration: 2 }}
          className={`absolute inset-0 rounded-full blur-3xl ${
            isOffline ? 'bg-cyan-500' : 'bg-purple-600'
          }`}
        />

        {/* Core Orb */}
        <motion.div
          animate={{
            scale: isListening ? [1, 1.1, 1] : 1,
            rotate: isListening ? 360 : 0,
          }}
          transition={{ 
            scale: { repeat: Infinity, duration: 1.5 },
            rotate: { repeat: Infinity, duration: 8, ease: "linear" }
          }}
          className={`relative w-48 h-48 rounded-full border-2 flex items-center justify-center overflow-hidden
            ${isOffline 
              ? 'border-cyan-400/50 bg-cyan-950/30' 
              : 'border-purple-400/50 bg-purple-950/30'}
            backdrop-blur-xl shadow-[0_0_50px_rgba(0,0,0,0.5)]`}
        >
          {/* Internal Particles/Waves */}
          <div className="absolute inset-0 flex items-center justify-center">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                animate={{
                  scale: isListening ? [0.8, 1.5, 0.8] : 1,
                  opacity: isListening ? [0.2, 0.5, 0.2] : 0.1,
                  rotate: i * 45,
                }}
                transition={{ repeat: Infinity, duration: 3, delay: i * 0.5 }}
                className={`absolute w-full h-1 border rounded-full ${
                  isOffline ? 'bg-cyan-400' : 'bg-purple-400'
                }`}
              />
            ))}
          </div>

          <div className="z-10 text-white flex flex-col items-center">
            {isListening ? (
              <Mic className="w-12 h-12 animate-pulse" />
            ) : (
              <div className="text-center">
                <span className="text-4xl font-light tracking-tighter block">S</span>
                <span className="text-xs uppercase tracking-[0.2em] opacity-50">Core</span>
              </div>
            )}
          </div>
        </motion.div>

        {/* Listening Text */}
        <AnimatePresence>
          {isListening && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap"
            >
              <div className="flex gap-1 items-center">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    animate={{ height: [4, 12, 4] }}
                    transition={{ repeat: Infinity, duration: 0.6, delay: i * 0.1 }}
                    className="w-1 bg-white rounded-full"
                  />
                ))}
                <span className="ml-2 text-sm font-medium text-white/80">Listening...</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {!isListening && (
        <p className="mt-16 text-white/40 text-sm font-light tracking-widest uppercase">
          Say "Steve" or tap the core
        </p>
      )}
    </div>
  );
};