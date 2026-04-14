"use client"

import { House, ChevronDown, User, Menu, X } from "lucide-react"
import ThemeToggle from "../landing-page/themeToggle"
import Link from "next/link"
import { useUser } from "@/app/context/user-context/userContext";
import { useState } from "react";


const Navbar = () => {
  const { user } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative sticky font-inter top-0 bg-black backdrop-blur-md transition-all duration-300 flex items-center justify-between px-4 md:px-16 md:py-6 py-6 w-full z-50">

      <div className="flex items-center gap-2">
        <Link href="/" className="flex items-center gap-2">
              <div className="bg-blue-700 p-2 rounded-lg">
                <House size={24} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold text-white font-montserrat tracking-tight">PrimePath</h1>
        </Link>
            </div>

      <nav className="hidden lg:block font-light">
        <ul className="group flex gap-8 items-center text-gray-300 transition-colors duration-300 text-xl font-bold">
          <li className="hover:text-white transition-colors"><Link href="/">Home</Link></li>
          <li className="hover:text-white transition-colors"><Link href="/user/buy-page">Buy</Link></li>
          <li className="hover:text-white transition-colors"><Link href="/sell-page">Sell</Link></li>
          <li className="hover:text-white transition-colors"><Link href="/"  className="flex items-center gap-1">Page <span><ChevronDown size={20}/></span></Link></li>
          <li className="hover:text-white transition-colors"><Link href="/">Contact</Link></li>
        </ul>
      </nav>

      <div className="flex gap-5">
        <div className="flex items-center gap-2 text-gray-300">
          <Link href="/user/profile" className="flex items-center gap-1">
        <div className="hidden sm:flex items-center justify-center p-3 rounded-full bg-blue-700 font-bold text-white">
          <User size={20}/>
        </div>
          <span className="hidden sm:inline-block ml-2">{user ? user.name : "Guest"}</span>
          </Link>
        </div>
        {!user && (
          <Link href="/auth/sign-up" className="bg-blue-700 text-white font-bold px-8 py-4 rounded-2xl dark:hover:bg-blue-700 dark:border-blue-700 items-center justify-center hidden sm:inline-flex">
            Sign Up
          </Link>
        )}
        <div className="hidden sm:flex items-center justify-center rounded-full bg-white dark:bg-black font-bold text-white dark:text-black dark:border-blue-700">
          <ThemeToggle />
        </div>
      </div>
      <div className="lg:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute left-0 top-full w-full bg-black text-gray-200 shadow-md lg:hidden">
          <div className="px-6 py-6 space-y-4">
            <nav>
              <ul className="flex flex-col gap-4 text-lg font-bold">
                <li className="hover:text-white"><Link href="/">Home</Link></li>
                <li className="hover:text-white"><Link href="/user/buy-page">Buy</Link></li>
                <li className="hover:text-white"><Link href="/sell-page">Sell</Link></li>
                <li className="hover:text-white"><Link href="/">Page</Link></li>
                <li className="hover:text-white"><Link href="/">Contact</Link></li>
              </ul>
            </nav>

            <div className="pt-4 border-t border-gray-800 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-blue-700 text-white">
                  <User size={18} />
                </div>
                <span className="text-gray-200">{user ? user.name : 'Guest'}</span>
              </div>

              {!user && (
                <Link href="/auth/sign-up" className="inline-flex items-center justify-center bg-blue-700 text-white font-bold px-6 py-2 rounded-xl">
                  Sign Up
                </Link>
              )}

              <div className="pt-2">
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar