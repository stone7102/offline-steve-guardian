import { SteveOrb } from '../components/SteveOrb';
import { motion } from 'framer-motion';
import { useSteve } from '../context/SteveContext';
import { Lock, Smartphone, ShieldCheck } from 'lucide-react';

export const AssistantPage = () => {
  const { isOffline, parentalControlActive } = useSteve();

  return (
    <div className="flex flex-col items-center pt-8 pb-32">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-2 mb-8 px-6"
      >
        <h1 className="text-3xl font-extralight tracking-tight text-white">
          Hello, <span className="font-semibold text-purple-400">User</span>
        </h1>
        <p className="text-white/40 text-sm max-w-[280px] mx-auto">
          Steve is active and monitoring your system for unauthorized data leaks.
        </p>
      </motion.div>

      <SteveOrb />

      <div className="grid grid-cols-2 gap-3 w-full px-6 mt-8">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 space-y-2">
          <div className="flex items-center justify-between">
            <Smartphone className="w-4 h-4 text-purple-400" />
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          </div>
          <p className="text-[10px] uppercase tracking-widest text-white/40">System Status</p>
          <p className="text-sm font-medium text-white">Controlled</p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 space-y-2">
          <div className="flex items-center justify-between">
            <Lock className="w-4 h-4 text-cyan-400" />
            <ShieldCheck className="w-4 h-4 text-cyan-400/50" />
          </div>
          <p className="text-[10px] uppercase tracking-widest text-white/40">Data Shield</p>
          <p className="text-sm font-medium text-white">{parentalControlActive ? 'Hardened' : 'Standard'}</p>
        </div>
      </div>

      <div className="w-full px-6 mt-6">
        <div className="bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-white/10 rounded-2xl p-5">
          <h3 className="text-xs uppercase tracking-widest text-white/50 font-bold mb-3">Recent Steve Activity</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="mt-1 w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.5)]" />
              <p className="text-xs text-white/80 leading-relaxed">
                "Steve" wake word detected. Local Neural Core engaged.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
              <p className="text-xs text-white/80 leading-relaxed">
                Privacy Guard blocked 12 data export attempts from system background.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};