"use client"


import { useState, ChangeEvent} from "react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/header/navBar"
import Footer from "@/components/footer/footer"
import HowItWork from "@/components/landing-page/howItWork"


const MIN_VALUE: number = 10000;
const MAX_VALUE: number = 10000000;
const COMMISSION_RATE: number = 0.03;
const SellPage: React.FC = () => {
  const [totalValue, setTotalValue] = useState<number>(MIN_VALUE);
  const brokerageFee: number = totalValue * COMMISSION_RATE;
  const handleSliderChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setTotalValue(Number(e.target.value));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
    <section className="relative h-[500px] flex flex-col justify-center items-center text-white">

      <div className="absolute inset-0 z-0 [clip-path:ellipse(150%_100%_at_50%_0%)]">
      <div className="absolute inset-0 bg-[url('/house-1.jpg')] bg-cover bg-center"/>
      <div className="absolute z-10 inset-0 bg-black/50"/>
      </div>
      <div className="relative z-20 text-center">
        <h1 className="font-montserrat text-4xl tracking-tight md:text-5xl font-bold">Sell Faster. Save Thousands</h1>
      </div>
    </section>

    <main>
      {/* sales listing will be populated here */}
      <HowItWork />


      <section className="max-w-4xl mx-auto px-4 py-20 mt-20">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold font-montserrat">Brokerage Calculator</h1>
          <p className="max-w-lg mx-auto">Calculate your potential brokerage fees before listing your property.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div>
            <span>MIN ${MIN_VALUE.toLocaleString()}</span>
          </div>
          <div>
            <span>MAX ${MAX_VALUE.toLocaleString()}</span>
          </div>

          <input 
          type="range"
           min={MIN_VALUE}
           max={MAX_VALUE}
           step={1000}
           value={totalValue}
           onChange={handleSliderChange}
           className="w-full h-2 bg-blue-200 rounded-xl appearance-none cursor-pointer accent-blue-700 mb-10"
          />

          <div className="grid grid-cols-2 gap-8 border-t pt-8">
            <div>
              <p className="font-bold mb-1 text-slate-900">Total Value ($)</p>
              <p className="text-2xl font-bold text-slate-900">${totalValue.toLocaleString()}</p>
            </div>
            <div>
              <p className="font-bold mb-1 text-slate-900">Brokerage Fee ($)</p>
              <p className="text-2xl font-bold text-slate-900">${brokerageFee.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
              </p>
            </div>
          </div>

        </div>
      </section>
    </main>
    <Footer />
    </div>
  )
}

export default SellPage
