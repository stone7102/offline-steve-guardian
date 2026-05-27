import { NavLink } from 'react-router';
import { Bot, Shield, Activity, Globe } from 'lucide-react';

export const MobileNav = () => {
  const links = [
    { to: "/", icon: Bot, label: "Steve" },
    { to: "/privacy", icon: Shield, label: "Privacy" },
    { to: "/logs", icon: Activity, label: "Safety" },
    { to: "/network", icon: Globe, label: "Core" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 px-6 pb-8 pt-4 bg-gradient-to-t from-black via-black/90 to-transparent">
      <div className="flex items-center justify-around bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl py-3 px-2 shadow-2xl">
        {links.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) => `
              flex flex-col items-center gap-1 px-4 py-1 rounded-xl transition-all duration-300
              ${isActive ? 'text-white bg-white/10' : 'text-white/40 hover:text-white/60'}
            `}
          >
            <Icon className="w-5 h-5" />
            <span className="text-[10px] uppercase tracking-tighter font-semibold">{label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};