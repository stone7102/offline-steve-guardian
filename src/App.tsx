import { BrowserRouter as Router, Routes, Route } from 'react-router';
import { SteveProvider } from './context/SteveContext';
import { Toaster } from 'sonner';
import { StatusBar } from './components/StatusBar';
import { MobileNav } from './components/MobileNav';
import { AssistantPage } from './pages/AssistantPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { LogsPage } from './pages/LogsPage';
import { NetworkPage } from './pages/NetworkPage';

function App() {
  return (
    <SteveProvider>
      <Router>
        <div className="min-h-screen bg-[#050505] text-foreground font-sans selection:bg-purple-500/30 overflow-x-hidden">
          {/* Background Ambient Glow */}
          <div className="fixed inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-600/10 blur-[120px] rounded-full" />
          </div>

          <div className="relative z-10 flex flex-col min-h-screen max-w-md mx-auto border-x border-white/5 bg-black/40">
            <StatusBar />
            
            <main className="flex-1 overflow-y-auto">
              <Routes>
                <Route path="/" element={<AssistantPage />} />
                <Route path="/privacy" element={<PrivacyPage />} />
                <Route path="/logs" element={<LogsPage />} />
                <Route path="/network" element={<NetworkPage />} />
              </Routes>
            </main>

            <MobileNav />
          </div>

          <Toaster 
            position="top-center" 
            toastOptions={{
              className: 'bg-black/80 backdrop-blur-xl border border-white/10 text-white',
            }} 
          />
        </div>
      </Router>
    </SteveProvider>
  );
}

export default App;