import Link from "next/link"
import { House, ChevronDown, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import ThemeToggle from "@/components/LandingPage/themeToggle"

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-10 md:px-16 md:py-10 py-6 absolute w-full z-10">
      <div className="flex items-center gap-1 font-bold justify-center text-gray-300 hover:text-white transition-colors duration-300">
        <House size={25}/>
        <h1 className="text-2xl">Rental</h1>
      </div>
      <nav>
        <ul className="group flex gap-15 items-center text-gray-300 transition-colors duration-300 text-xl font-bold">
          <li className="hover:text-white"><Link href="/">Home</Link></li>
          <li><Link href="/">Buy</Link></li>
          <li><Link href="/">Sell</Link></li>
          <li><Link href="/"  className="flex items-center gap-1">Listing <span><ChevronDown size={20} /></span></Link></li>
          <li><Link href="/"  className="flex items-center gap-1">Page <span><ChevronDown size={20}/></span></Link></li>
          <li><Link href="/">Contact</Link></li>
        </ul>
      </nav>

      <div className="flex gap-5">
        <div className="flex items-center justify-center p-3 rounded-full bg-green-600 font-bold text-white">
          <User size={20}/>
        </div>
        <Button variant="outline" className="bg-green-600 text-white font-bold px-10 py-5 rounded-2xl dark:hover:bg-green-500">Sign In</Button>
        <div className="flex items-center justify-center rounded-full bg-white dark:bg-black font-bold text-white dark:text-black">
          <ThemeToggle />
        </div>
      </div>
    </div>
  )
}

export default Navbar