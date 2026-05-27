import { useSteve } from '../context/SteveContext';
import { format } from 'date-fns';
import { ShieldAlert, ShieldCheck, Clock, Filter } from 'lucide-react';
import { motion } from 'framer-motion';

export const LogsPage = () => {
  const { logs } = useSteve();

  return (
    <div className="px-6 pt-8 pb-32 space-y-6">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-2xl font-semibold text-white">Safety Logs</h1>
          <p className="text-white/40 text-sm">Real-time data interception log</p>
        </div>
        <button className="p-2.5 rounded-xl bg-white/5 text-white/60 hover:text-white">
          <Filter className="w-5 h-5" />
        </button>
      </div>

      <div className="space-y-3">
        {logs.length === 0 ? (
          <div className="py-20 flex flex-col items-center justify-center text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center">
              <ShieldCheck className="w-8 h-8 text-white/20" />
            </div>
            <p className="text-white/40 text-sm">No security threats detected yet.<br/>Steve is monitoring background services.</p>
          </div>
        ) : (
          logs.map((log, idx) => (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.05 }}
              key={log.id}
              className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className={`p-2 rounded-lg ${
                  log.status === 'blocked' ? 'bg-red-500/20 text-red-400' : 'bg-green-500/20 text-green-400'
                }`}>
                  {log.status === 'blocked' ? <ShieldAlert className="w-4 h-4" /> : <ShieldCheck className="w-4 h-4" />}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium text-white">{log.app}</p>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded uppercase font-bold ${
                      log.status === 'blocked' ? 'bg-red-500/20 text-red-400' : 'bg-green-500/20 text-green-400'
                    }`}>
                      {log.status}
                    </span>
                  </div>
                  <p className="text-[10px] text-white/40 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {format(log.timestamp, 'HH:mm:ss')} • {log.action}
                  </p>
                </div>
              </div>
              <div className="text-[10px] font-mono text-white/20">
                ID:{log.id}
              </div>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
};