import React from 'react';
import Link from 'next/link';

import { 
  LayoutDashboard, 
  Search, 
  Heart, 
  PlusCircle, 
  User, 
  BookOpen, 
  LucideIcon ,
  House
} from 'lucide-react';

interface NavItem {
  name: string;
  icon: LucideIcon;
  active?: boolean;
  badge?: string;
}

const Sidebar: React.FC = () => {
  const menuItems: NavItem[] = [
    { name: 'Dashboard', icon: LayoutDashboard },
    { name: 'Explore Properties', icon: Search },
    { name: 'Favorite Properties', icon: Heart },
    { name: 'Add Properties', icon: PlusCircle },
    { name: 'User Profile', icon: User },
    { name: 'Blog', icon: BookOpen },
  ];

  return (
    <aside className="w-64 h-screen bg-[#1e293b] text-slate-400 flex flex-col sticky top-0 hidden lg:flex">
      <div className="p-6 text-2xl font-bold text-white flex items-center gap-1 font-montserrat tracking-tight">
        <span className="text-green-500 text-3xl"><House size={24} /></span> PrimePath
      </div>
      
      <nav className="flex-1 px-4 font-poppins space-y-1 overflow-y-auto mt-4">
        {menuItems.map((item) => (
          <button
            key={item.name}
            className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 ${
              item.active 
                ? 'bg-slate-800 text-white border-l-4 border-green-500' 
                : 'hover:bg-slate-800 hover:text-slate-200'
            }`}
          >
            <nav className="flex items-center gap-3">
              <item.icon size={20} className={item.active ? 'text-green-500' : ''} />
              <span className="text-[13px] font-medium">{item.name}</span>
            </nav>
            {/* {item.badge && (
              <span className="bg-amber-500 text-[10px] text-white px-1.5 py-0.5 rounded font-bold">
                {item.badge}
              </span>
            )} */}
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
