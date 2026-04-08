"use client"

import { Button } from "@/components/ui/button"
import Navbar from "@/components/header/navBar"
import Footer from "@/components/footer/footer"
import { Search } from "lucide-react"



const BuyPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
    <section className="relative h-[500px] flex flex-col justify-center items-center text-white">

      <div className="absolute inset-0 z-0 [clip-path:ellipse(150%_100%_at_50%_0%)]">
      <div className="absolute inset-0 bg-[url('/house-1.jpg')] bg-cover bg-center"/>
      <div className="absolute z-10 inset-0 bg-black/50"/>
      </div>
      <div className="relative z-20 text-center">
        <h1 className="font-montserrat text-4xl tracking-tight md:text-5xl font-bold">Find Your Dream Home</h1>
      </div>

      <div className="absolute -bottom-6 z-30 w-full max-w-2xl px-4 mt-4">
          <div className="flex items-center bg-white rounded-lg shadow-xl p-2 border border-gray-100">
            <div className="flex items-center flex-1 px-4">
              <Search className="w-5 h-5 text-gray-400 mr-3" />
              <input 
                type="text" 
                placeholder="City, Address, Zip :"
                className="w-full py-3 text-gray-800 placeholder:text-slate-400 focus:outline-none bg-transparent"
              />
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-6 rounded-md text-lg font-semibold transition-colors">
              Search
            </Button>
          </div>
        </div>
    </section>

    <main>
      {/* sales listing will be populated here */}
    </main>
    <Footer />
    </div>
  )
}

export default BuyPage
