import { useSteve } from '../context/SteveContext';
import { Wifi, WifiOff, ShieldCheck, ShieldAlert, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

export const StatusBar = () => {
  const { isOffline, parentalControlActive, shareData } = useSteve();

  return (
    <div className="w-full px-6 py-4 flex items-center justify-between border-b border-white/5 bg-black/20 backdrop-blur-md">
      <div className="flex items-center gap-3">
        <div className={`p-1.5 rounded-lg ${isOffline ? 'bg-cyan-500/10 text-cyan-400' : 'bg-purple-500/10 text-purple-400'}`}>
          <Cpu className="w-4 h-4" />
        </div>
        <div>
          <h2 className="text-[10px] uppercase tracking-widest opacity-40 leading-none">Intelligence</h2>
          <p className="text-xs font-medium text-white/90">
            {isOffline ? 'Local Neural Core' : 'Cloud Hybrid Core'}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1.5">
          {parentalControlActive ? (
            <ShieldCheck className="w-4 h-4 text-green-400" />
          ) : (
            <ShieldAlert className="w-4 h-4 text-amber-400" />
          )}
          <span className="text-[10px] uppercase font-bold text-white/50">Safe</span>
        </div>

        <div className="flex items-center gap-1.5">
          {isOffline ? (
            <WifiOff className="w-4 h-4 text-white/30" />
          ) : (
            <Wifi className="w-4 h-4 text-purple-400" />
          )}
          <span className="text-[10px] uppercase font-bold text-white/50">
            {isOffline ? 'Offline' : 'Online'}
          </span>
        </div>
      </div>
    </div>
  );
};