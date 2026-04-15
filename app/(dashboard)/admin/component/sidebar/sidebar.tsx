import React from 'react';
import Link from 'next/link';

import { 
  LayoutDashboard, 
  Search, 
  MessageSquare, 
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
  path?: string;
}

interface SidebarProps {
  isOpen?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen = true }) => {
  const menuItems: NavItem[] = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/admin/admin-dashboard' },
    { name: 'Explore Properties', icon: Search, path: '/admin/property-page' },
    { name: 'Add Properties', icon: PlusCircle, path: '/admin/add-property' },
    { name: 'User Profile', icon: User, path: '/admin/user-profile' },
    { name: 'Chat', icon: MessageSquare, path: '/admin/messages' },
    { name: 'Blog', icon: BookOpen, path: '/admin/blog' },
  ];

  return (
    <aside className={`w-64 h-screen bg-[#1e293b] text-slate-400 flex flex-col sticky top-0 ${isOpen ? 'hidden' : 'lg:flex'}`}>
      <div className="p-6 text-2xl font-bold text-white flex items-center gap-1 font-montserrat tracking-tight">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-green-500 text-3xl"><House size={24} /></span> PrimePath
        </Link>
      </div>
      
      <nav className="flex-1 px-4 font-poppins space-y-1 overflow-y-auto mt-4">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.path || '#'}
            className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 ${
              item.active 
                ? 'bg-slate-800 text-white border-l-4 border-green-500' 
                : 'hover:bg-slate-800 hover:text-slate-200'
            }`}
          >
            <li className="flex items-center gap-3">
              <item.icon size={20} className={item.active ? 'text-green-500' : ''} />
              <span className="text-[13px] font-medium">{item.name}</span>
            </li>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
