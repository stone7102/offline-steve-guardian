import { useSteve } from '../context/SteveContext';
import { Wifi, WifiOff, Cpu, Zap, Radio, Database } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { Progress } from '@/components/ui/progress';

export const NetworkPage = () => {
  const { isOffline, setIsOffline } = useSteve();

  return (
    <div className="px-6 pt-8 pb-32 space-y-8">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold text-white">Neural Core</h1>
        <p className="text-white/40 text-sm">Manage Steve's processing engine and connectivity.</p>
      </div>

      <div className="bg-gradient-to-br from-white/10 to-transparent border border-white/10 rounded-3xl p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className={`p-3 rounded-2xl ${isOffline ? 'bg-cyan-500/20 text-cyan-400' : 'bg-purple-500/20 text-purple-400'}`}>
              {isOffline ? <WifiOff className="w-6 h-6" /> : <Wifi className="w-6 h-6" />}
            </div>
            <div>
              <p className="text-lg font-medium text-white">{isOffline ? 'Offline Mode' : 'Cloud Sync'}</p>
              <p className="text-xs text-white/40">{isOffline ? 'Processing on local CPU' : 'Hybrid cloud processing'}</p>
            </div>
          </div>
          <Switch checked={isOffline} onCheckedChange={setIsOffline} />
        </div>

        <div className="space-y-4 pt-4 border-t border-white/5">
          <div className="space-y-2">
            <div className="flex justify-between text-[10px] uppercase tracking-widest text-white/40 font-bold">
              <span>Local Model Load</span>
              <span>{isOffline ? '42%' : '8%'}</span>
            </div>
            <Progress value={isOffline ? 42 : 8} className="h-1 bg-white/5" />
          </div>

          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-white/60">
                <Zap className="w-3 h-3" />
                <span className="text-[10px] uppercase font-bold">Latency</span>
              </div>
              <p className="text-sm font-medium text-white">{isOffline ? '12ms' : '145ms'}</p>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-white/60">
                <Database className="w-3 h-3" />
                <span className="text-[10px] uppercase font-bold">Data Saved</span>
              </div>
              <p className="text-sm font-medium text-white">1.2 GB/mo</p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xs uppercase tracking-[0.2em] text-white/30 font-bold px-1">Network Protocols</h3>
        
        <div className="space-y-2">
          {[
            { icon: Radio, label: 'Encrypted Tunnel', status: 'Active' },
            { icon: Cpu, label: 'Local Weights', status: 'v4.2.0-L' },
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-2xl">
              <div className="flex items-center gap-3">
                <item.icon className="w-4 h-4 text-white/40" />
                <span className="text-sm text-white/80">{item.label}</span>
              </div>
              <span className="text-[10px] font-mono text-cyan-400">{item.status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};