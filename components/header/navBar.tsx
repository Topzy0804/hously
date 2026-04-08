"use client"

import { House, ChevronDown, User } from "lucide-react"
import ThemeToggle from "../landing-page/themeToggle"
import Link from "next/link"
import { useUser } from "@/app/context/user-context/userContext";


const Navbar = () => {
  const { user } = useUser();

  return (
    <div className="sticky font-inter top-0 bg-black backdrop-blur-md transition-all duration-300 flex items-center justify-between px-10 md:px-16 md:py-6 py-6 w-full z-50">

      <div className="flex items-center gap-2">
              <div className="bg-blue-700 p-2 rounded-lg">
                <House size={24} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold text-white font-montserrat tracking-tight">PrimePath</h1>
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
        <div className="hidden sm:flex items-center justify-center p-3 rounded-full bg-blue-700 font-bold text-white">
          <User size={20}/>
        </div>
          <span className="ml-2">{user ? user.name : "Guest"}</span>
        </div>
        {!user && (
          <Link href="/auth/sign-up" className="bg-blue-700 text-white font-bold px-10 py-5 rounded-2xl dark:hover:bg-blue-700 dark:border-blue-700 inline-flex items-center justify-center">
            Sign Up
          </Link>
        )}
        <div className="flex items-center justify-center rounded-full bg-white dark:bg-black font-bold text-white dark:text-black dark:border-blue-700">
          <ThemeToggle />
        </div>
      </div>
    </div>
  )
}

export default Navbar