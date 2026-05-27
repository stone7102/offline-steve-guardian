import { useSteve } from '../context/SteveContext';
import { Shield, EyeOff, Share2, Lock, UserCheck, AlertTriangle } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { motion } from 'framer-motion';

export const PrivacyPage = () => {
  const { 
    parentalControlActive, setParentalControlActive,
    shareData, setShareData 
  } = useSteve();

  return (
    <div className="px-6 pt-8 pb-32 space-y-8">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold text-white">Parental Controls</h1>
        <p className="text-white/40 text-sm">Steve ensures your personal data never leaves this device without explicit consent.</p>
      </div>

      <div className="space-y-4">
        {/* Parental Toggle */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="p-2.5 rounded-xl bg-purple-500/20 text-purple-400">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-medium text-white">Privacy Guard</p>
              <p className="text-xs text-white/40">Steve blocks all trackers</p>
            </div>
          </div>
          <Switch 
            checked={parentalControlActive} 
            onCheckedChange={setParentalControlActive}
          />
        </div>

        {/* Data Sharing Toggle */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400">
                <Share2 className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">Global Data Share</p>
                <p className="text-xs text-white/40">Share usage with Steve Cloud</p>
              </div>
            </div>
            <Switch 
              checked={shareData} 
              onCheckedChange={setShareData}
            />
          </div>
          
          {!shareData && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="flex gap-2 p-3 bg-green-500/10 border border-green-500/20 rounded-xl"
            >
              <UserCheck className="w-4 h-4 text-green-400 flex-shrink-0" />
              <p className="text-[10px] text-green-400/80 leading-snug">
                Your identity is completely hidden. All AI processing happens locally when data sharing is disabled.
              </p>
            </motion.div>
          )}
        </div>

        {/* Additional Controls */}
        <div className="grid grid-cols-1 gap-4">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-4 opacity-50 cursor-not-allowed">
            <EyeOff className="w-5 h-5 text-white/40" />
            <div>
              <p className="text-sm font-medium text-white">Stealth Mode</p>
              <p className="text-[10px] text-white/40 uppercase tracking-tighter">Requires Pro Core</p>
            </div>
          </div>
          
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-4 opacity-50 cursor-not-allowed">
            <Lock className="w-5 h-5 text-white/40" />
            <div>
              <p className="text-sm font-medium text-white">App Lock</p>
              <p className="text-[10px] text-white/40 uppercase tracking-tighter">Requires Pro Core</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 bg-amber-500/10 border border-amber-500/20 rounded-2xl flex gap-4">
        <AlertTriangle className="w-6 h-6 text-amber-500 flex-shrink-0" />
        <div className="space-y-1">
          <p className="text-sm font-bold text-amber-500">Security Note</p>
          <p className="text-xs text-amber-500/80 leading-relaxed">
            Even when offline, Steve's parental controls remain active. Data requested by third-party apps will be intercepted by the Local Neural Engine.
          </p>
        </div>
      </div>
    </div>
  );
};