import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'sonner';

interface LogEntry {
  id: string;
  timestamp: Date;
  action: string;
  status: 'blocked' | 'allowed';
  app: string;
}

interface SteveContextType {
  isListening: boolean;
  isOffline: boolean;
  parentalControlActive: boolean;
  shareData: boolean;
  lastAlert: Date | null;
  logs: LogEntry[];
  setIsListening: (val: boolean) => void;
  setIsOffline: (val: boolean) => void;
  setParentalControlActive: (val: boolean) => void;
  setShareData: (val: boolean) => void;
  triggerSteve: () => void;
  addLog: (action: string, app: string, status: 'blocked' | 'allowed') => void;
}

const SteveContext = createContext<SteveContextType | undefined>(undefined);

export const SteveProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isListening, setIsListening] = useState(false);
  const [isOffline, setIsOffline] = useState(false);
  const [parentalControlActive, setParentalControlActive] = useState(true);
  const [shareData, setShareData] = useState(false);
  const [lastAlert, setLastAlert] = useState<Date | null>(null);
  const [logs, setLogs] = useState<LogEntry[]>([]);

  const addLog = (action: string, app: string, status: 'blocked' | 'allowed') => {
    const newLog: LogEntry = {
      id: Math.random().toString(36).substr(2, 9),
      timestamp: new Date(),
      action,
      app,
      status,
    };
    setLogs(prev => [newLog, ...prev].slice(0, 50));
  };

  const triggerSteve = () => {
    setIsListening(true);
    setLastAlert(new Date());
    toast.success("Steve is alerted and listening", {
      description: isOffline ? "Running on Local Neural Core" : "Connected to Global Cloud",
      icon: "👋",
    });
    
    // Simulate interaction
    setTimeout(() => {
      setIsListening(false);
    }, 4000);
  };

  // Simulate background data protection
  useEffect(() => {
    const interval = setInterval(() => {
      if (parentalControlActive && !shareData) {
        const apps = ["Instagram", "Google Services", "Ad Tracker", "Analytics", "Meta Services"];
        const randomApp = apps[Math.floor(Math.random() * apps.length)];
        addLog("Data Request", randomApp, "blocked");
      }
    }, 10000);
    return () => clearInterval(interval);
  }, [parentalControlActive, shareData]);

  return (
    <SteveContext.Provider value={{
      isListening, isOffline, parentalControlActive, shareData, lastAlert, logs,
      setIsListening, setIsOffline, setParentalControlActive, setShareData, triggerSteve, addLog
    }}>
      {children}
    </SteveContext.Provider>
  );
};

export const useSteve = () => {
  const context = useContext(SteveContext);
  if (!context) throw new Error('useSteve must be used within SteveProvider');
  return context;
};