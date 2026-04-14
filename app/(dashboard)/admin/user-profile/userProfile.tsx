"use client"

import React from 'react'
import Image from 'next/image'
import { Mail, Phone, MapPin } from 'lucide-react' // Added specific icons

const UserProfile = () => {
  return (
    <div className="w-full bg-white p-10">
      <div className="flex items-center justify-end mb-6">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Edit Profile
        </button>
      </div>
      {/* Cover Image Container */}
      <div className="relative w-full h-72 rounded-xl overflow-hidden">
        <Image 
          src="/user-cover-image.jpg" 
          alt="Cover" 
          fill 
          className="object-cover" 
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Profile Header (Overlapping Section) */}
      <div className="px-8 -mt-16 relative z-10 flex flex-col md:flex-row items-end gap-6">
        <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
          <Image 
            src="/user-cover-image.jpg" 
            alt="Profile" 
            width={128} 
            height={128} 
            className="object-cover h-full w-full" 
          />
        </div>
        <div className="pb-4">
          <h3 className="text-2xl font-bold text-slate-800 font-poppins">John Doe</h3>
          <p className="text-slate-500 font-poppins text-sm">john.doe@example.com</p>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 p-8">
        {/* Left Sidebar: Contact Info */}
        <div className="md:col-span-1 space-y-6">
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
            <h4 className="font-bold mb-4 text-slate-800">Contact Details</h4>
            <div className="space-y-4">
              <ContactItem icon={Mail} label="Email" value="john.doe@example.com" />
              <ContactItem icon={Phone} label="Phone" value="+1 (123) 456-7890" />
              <ContactItem icon={MapPin} label="Location" value="New York, USA" />
            </div>
          </div>
        </div>

        {/* Right Content: About & Properties */}
        <div className="md:col-span-3 space-y-8">
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
            <h3 className="font-bold text-lg mb-2 text-slate-800">About Me</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              I have started my career as a trainee and proven myself...
            </p>
          </div>
          
          <div>
            <h2 className="text-xl font-bold text-slate-800 mb-4">My Properties</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Property cards go here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Small helper component for contact items
const ContactItem = ({ icon: Icon, label, value }: { icon: any, label: string, value: string }) => (
  <div className="flex items-start gap-3">
    <div className="p-2 bg-white rounded-lg shadow-sm">
      <Icon size={18} className="text-green-600" />
    </div>
    <div>
      <p className="text-xs text-slate-400 font-medium uppercase">{label}</p>
      <p className="text-sm text-slate-700 font-semibold">{value}</p>
    </div>
  </div>
);

export default UserProfile;