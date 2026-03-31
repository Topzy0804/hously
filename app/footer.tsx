import { Button } from "@/components/ui/button"
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { House, ChevronRight, MapPin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-[#0f172a] mt-32">
      {/* Newsletter Section - Floating */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl px-4">
        <div className="bg-white dark:bg-black rounded-xl shadow-xl p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-6 border border-gray-100 dark:border-none">
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white font-montserrat">
              Subscribe to Newsletter!
            </h3>
            <p className="text-slate-500 mt-2 font-inter">
              Subscribe to get latest updates and information.
            </p>
          </div>
          
          <div className="relative w-full max-w-md">
            <input 
              type="email" 
              placeholder="Enter your email :" 
              className="w-full pl-6 pr-32 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-gray-50 dark:bg-slate-900 dark:text-white"
            />
            <Button className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-700 hover:bg-blue-400 text-white rounded-full px-8 py-4">
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 pt-48 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-blue-700 p-2 rounded-lg">
                <House size={24} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold text-white font-montserrat tracking-tight">PrimePath</h1>
            </div>
            <p className="text-gray-400 leading-relaxed font-inter">
              A great platform to buy, sell and rent your properties without any agent or commissions.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold font-montserrat mb-6 text-lg">Company</h3>
            <ul className="space-y-4 font-inter">
              {['About us', 'Services', 'Pricing', 'Blog', 'Login'].map((link) => (
                <li key={link} className="flex items-center group cursor-pointer">
                  <ChevronRight size={16} className="text-gray-500 group-hover:text-emerald-500 transition-colors" />
                  <span className="text-gray-400 group-hover:text-white transition-colors ml-2">{link}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-white font-montserrat font-semibold mb-6 text-lg">Useful Links</h3>
            <ul className="space-y-4 font-inter">
              {['Terms of Services', 'Privacy Policy', 'Listing', 'Contact'].map((link) => (
                <li key={link} className="flex items-center group cursor-pointer">
                  <ChevronRight size={16} className="text-gray-500 group-hover:text-emerald-500 transition-colors" />
                  <span className="text-gray-400 group-hover:text-white transition-colors ml-2">{link}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="font-inter">
            <h3 className="text-white font-semibold mb-6 text-lg">Contact Details</h3>
            <div className="space-y-4 text-gray-400">
              <div className="flex gap-3">
                <MapPin size={20} className="text-blue-700 shrink-0" />
                <p className="font-inter">C/54 Northwest Freeway, Suite 558, Houston, USA 485 <br/> 
                   <span className="text-blue-700 text-sm cursor-pointer hover:underline">View on Google map</span>
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-blue-700" />
                <p className="hover:text-white font-inter cursor-pointer transition-colors">contact@example.com</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-blue-700" />
                <p className="hover:text-white font-inter cursor-pointer transition-colors">+152 534-468-854</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 font-inter text-sm">
            © {new Date().getFullYear()} PrimePath. Design by Topzy.
          </p>
          <div className="flex gap-4">
            {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map((Icon, idx) => (
              <a key={idx} href="#" className="p-2 border border-gray-700 rounded-md hover:bg-emerald-600 hover:border-blue-700 transition-all text-gray-400 hover:text-white">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer