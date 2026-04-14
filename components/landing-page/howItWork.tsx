import { House, Briefcase, Key } from "lucide-react"

const HowItWork = () => {
  return (
    <div className="max-w-7xl mx-auto py-20 px-4">
      <div className="flex flex-col gap-5 justify-center items-center">
        <h1 className="font-montserrat text-2xl font-bold">How It Works</h1>
        <p className="font-inter max-w-2xl text-center text-gray-500">A simple guide to understanding our process and how we can help you achieve your real estate goals.</p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-20 mt-20">
        <div className="flex flex-col gap-3 justify-center items-center text-center">
          <div className="flex items-center justify-center h-24 w-24 bg-blue-100 [clip-path:polygon(25%_0%,75%_0%,100%_50%,75%_100%,25%_100%,0%_50%)]">
          <House size={30} className="text-blue-700"/>
          </div>
          <h1 className="font-montserrat text-xl font-bold">Evaluate Property</h1>
          <p className="font-inter text-gray-500">Our experts will assess the value and condition of your property and provide you with a detailed report of the assessment.</p>
        </div>

        <div className="flex flex-col gap-3 justify-center items-center text-center">
          <div className="flex items-center justify-center h-24 w-24 bg-blue-100 [clip-path:polygon(25%_0%,75%_0%,100%_50%,75%_100%,25%_100%,0%_50%)]">
          <Briefcase size={30}  className="text-blue-700"/>
          </div>
          <h1 className="font-montserrat text-xl font-bold">Meeting with Agent</h1>
          <p className="font-inter text-gray-500">Our agents will schedule a meeting with you to discuss your property and answer any questions you may have.</p>
        </div>

        <div className="flex flex-col gap-3 justify-center items-center text-center">
          <div className="flex items-center justify-center h-24 w-24 bg-blue-100 [clip-path:polygon(25%_0%,75%_0%,100%_50%,75%_100%,25%_100%,0%_50%)]">
          <Key size={30} className="text-blue-700"/>
          </div>
          <h1 className="font-montserrat text-xl font-bold">Close the Deal</h1>
          <p className="font-inter text-gray-500">Once you're satisfied with the offer, we'll help you close the deal and transfer ownership of your property.</p>
        </div>
      </div>
    </div>
  )
}

export default HowItWork