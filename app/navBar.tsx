import Link from "next/link"
import { House, ChevronDown, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import ThemeToggle from "../components/landing-page/themeToggle"

const Navbar = () => {
  return (
    <div className="sticky font-inter top-0 bg-black/50 backdrop:blur-md transition-all duration-300 flex items-center justify-between px-10 md:px-16 md:py-6 py-6 w-full z-50">

      <div className="flex items-center gap-1 font-bold justify-center text-gray-300 hover:text-white hover:opacity-80 transition-opacity cursor-pointer duration-300">
        <House size={25} className="text-blue-700"/>
        <h1 className="text-2xl tracking-tight">PrimePath</h1>
      </div>

      <nav className="hidden lg:block font-light">
        <ul className="group flex gap-15 items-center text-gray-300 transition-colors duration-300 text-xl font-bold">
          <li className="hover:text-white transition-colors"><Link href="/">Home</Link></li>
          <li className="hover:text-white transition-colors"><Link href="/">Buy</Link></li>
          <li className="hover:text-white transition-colors"><Link href="/">Sell</Link></li>
          <li className="hover:text-white transition-colors"><Link href="/"  className="flex items-center gap-1">Listing <span><ChevronDown size={20} /></span></Link></li>
          <li className="hover:text-white transition-colors"><Link href="/"  className="flex items-center gap-1">Page <span><ChevronDown size={20}/></span></Link></li>
          <li className="hover:text-white transition-colors"><Link href="/">Contact</Link></li>
        </ul>
      </nav>

      <div className="flex gap-5">
        <div className="hidden sm:flex items-center justify-center p-3 rounded-full bg-blue-700 font-bold text-white">
          <User size={20}/>
        </div>
        <Button variant="outline" className="bg-blue-700 text-white font-bold px-10 py-5 rounded-2xl dark:hover:bg-blue-700 dark:border-blue-700">Sign In</Button>
        <div className="flex items-center justify-center rounded-full bg-white dark:bg-black font-bold text-white dark:text-black dark:border-blue-700">
          <ThemeToggle />
        </div>
      </div>
    </div>
  )
}

export default Navbar