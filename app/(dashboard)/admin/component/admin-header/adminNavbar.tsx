"use client"

import React, { FC } from 'react'
import { Search, BellDot, User, Menu } from 'lucide-react'
import { useUser } from '@/app/context/user-context/userContext'
import Link from 'next/link'

interface AdminNavbarProps {
  isSidebarOpen?: boolean
  onToggleSidebar?: () => void
}

const AdminNavbar: FC<AdminNavbarProps> = ({ isSidebarOpen, onToggleSidebar }) => {
  const { user } = useUser()

  return (
    <div className="flex items-center justify-between px-10 py-6">
      <div className="flex items-center gap-4">
        <div>
          <button
            type="button"
            aria-label="Toggle sidebar"
            onClick={() => onToggleSidebar && onToggleSidebar()}
            className="p-1"
          >
            <Menu size={20} />
          </button>
        </div>
        <div className="flex items-center gap-2 text-gray-300">
          <Search size={20} />
          <input
            type="text"
            placeholder="Search..."
            className="ml-2 px-4 py-2 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <BellDot size={20} />
        <div className="flex items-center gap-2 text-gray-300">
          <Link href="/user/profile" className="flex items-center gap-1">
          <div className="hidden sm:flex items-center justify-center p-3 rounded-full bg-blue-700 font-bold text-white">
            <User size={20} />
          </div>
          <span className="ml-2">{user ? (user as any).name : 'Guest'}</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AdminNavbar