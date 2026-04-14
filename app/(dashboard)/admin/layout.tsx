"use client"
import { useState } from 'react';
import Sidebar from './component/sidebar/sidebar';
import AdminNavbar from './component/admin-header/adminNavbar';


export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex bg-slate-50 min-h-screen">
      {/* Sidebar persists across all admin sub-pages */}
      <Sidebar isOpen={isSidebarOpen} />
      
      <div className="flex-1 flex flex-col w-full">
        {/* Navbar persists across all admin sub-pages */}
        <AdminNavbar onToggleSidebar={toggleSidebar} />
        
        <main className="flex-1">
          {/* This is where your page.tsx content (like AdminDashboard) will render */}
          {children}
        </main>
      </div>
    </div>
  );
}