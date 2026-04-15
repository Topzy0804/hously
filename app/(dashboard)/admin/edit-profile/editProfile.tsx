"use client"

import React from 'react'
import Image from 'next/image'
import { User, Mail, Briefcase, Phone, Globe, Lock, Trash2 } from 'lucide-react'
import { createRows } from '../../../utils/db'
import { useState } from 'react'

interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
  occupation?: string;
  description?: string;
}

const EditProfile: React.FC = () => {
 const [profile, setProfile] = useState<UserProfile>({
  firstName: '',
  lastName: '',
  email: '',
  occupation: '',
  description: '',
 })

 const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const { name, value } = e.target;
  setProfile((prevProfile) => ({
    ...prevProfile,
    [name]: value
  }));
 };


 const handleSaveChanges = async () => {
  try {
    // Assuming you have a function to create a new row in your Appwrite database
    await createRows('user-profile', {
      firstName: profile.firstName,
      lastName: profile.lastName,
      email: profile.email,
      occupation: profile.occupation,
      description: profile.description
    });
  } catch (error) {
    console.error('Error saving changes:', error);
  }
 }

  return (
    <div className="w-full p-4 md:p-10 bg-gray-50 min-h-screen transition-all duration-300 ease-in-out">
      <div className="relative w-full h-72 rounded-xl mb-10 overflow-hidden">
              <Image 
                src="/user-cover-image.jpg" 
                alt="Cover" 
                fill 
                className="object-cover" 
              />
              <div className="absolute inset-0 bg-black/60"></div>
            </div>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
        
        {/* Left Sidebar Profile Card */}
        <div className='md:col-span-1 bg-white p-8 rounded-xl shadow-sm flex flex-col items-center gap-4 h-fit border border-gray-100'>
          <div className='relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md'>
            <Image 
              src="/user-cover-image.jpg" 
              alt="Profile" 
              fill
              className="object-cover" 
            />
          </div>
          <div className="text-center">
            <h2 className="text-xl font-bold text-gray-800">Calvin Carlo</h2>
            <p className="text-gray-500 text-sm">calvin@hotmail.com</p>
          </div>
        </div>

        {/* Right Content Area */}
        <div className='md:col-span-3 space-y-8'>
          
          {/* Personal Detail Section */}
          <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold mb-6 border-b pb-2">Personal Detail :</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormInput 
                label="First Name" 
                required 
                icon={<User size={18}/>} 
                placeholder="First Name" 
                name="firstName"
                value={profile.firstName}
                onChange={handleInputChange}
              />
              <FormInput 
                label="Last Name" 
                required 
                icon={<User size={18}/>} 
                placeholder="Last Name" 
                name="lastName"
                value={profile.lastName}
                onChange={handleInputChange}
              />
              <FormInput 
                label="Your Email" 
                required 
                type="email" 
                icon={<Mail size={18}/>} 
                placeholder="Email" 
                name="email"
                value={profile.email}
                onChange={handleInputChange}
              />
              <FormInput 
                label="Occupation" 
                icon={<Briefcase size={18}/>} 
                placeholder="Occupation" 
                name="occupation"
                value={profile.occupation}
                onChange={handleInputChange}
              />
              
              <div className="col-span-full space-y-2">
                <label className="text-sm font-medium text-gray-700">Description :</label>
                <textarea 
                  placeholder="Message" 
                  name="description"
                  value={profile.description}
                  onChange={handleInputChange}
                  rows={4} 
                  className="w-full p-2.5 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-green-500 outline-none transition-all resize-none" 
                />
              </div>
            </div>
            <button 
              onClick={handleSaveChanges}
              className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
              Save Changes
            </button>
          </section>

          {/* Contact & Password Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Info */}
            <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold mb-6 border-b pb-2">Contact Info :</h3>
              <div className="space-y-4">
                <FormInput label="Phone No." icon={<Phone size={18}/>} placeholder="Phone" />
                <FormInput label="Website" icon={<Globe size={18}/>} placeholder="Url" />
                <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium">Add</button>
              </div>
            </section>

            {/* Change Password */}
            <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold mb-6 border-b pb-2">Change password :</h3>
              <div className="space-y-4">
                <FormInput label="Old password" type="password" icon={<Lock size={18}/>} placeholder="Old password" />
                <FormInput label="New password" type="password" icon={<Lock size={18}/>} placeholder="New password" />
                <FormInput label="Re-type New password" type="password" icon={<Lock size={18}/>} placeholder="Re-type New password" />
                <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium w-full lg:w-auto">Save password</button>
              </div>
            </section>
          </div>

          {/* Delete Account */}
          <section className="bg-white p-6 rounded-xl shadow-sm border border-red-100">
            <h3 className="text-lg font-semibold mb-2 text-red-600 flex items-center gap-2">
              <Trash2 size={20} /> Delete Account :
            </h3>
            <p className="text-gray-500 text-sm mb-4">Do you want to delete the account? Please press below "Delete" button</p>
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
              Delete
            </button>
          </section>
        </div>
      </div>
    </div>
  )
}

/**
 * Reusable Input Component with TypeScript Interfaces
 */
interface FormInputProps {
  label: string;
  placeholder: string;
  type?: string;
  required?: boolean;
  icon?: React.ReactNode;
  name?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const FormInput: React.FC<FormInputProps> = ({ label, placeholder, type = "text", required = false, icon, name, value, onChange }) => (
  <div className="space-y-2">
    <label className="text-sm font-medium text-gray-700">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <div className="relative">
      {icon && (
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          {icon}
        </div>
      )}
      <input 
        type={type} 
        placeholder={placeholder} 
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className={`w-full ${icon ? 'pl-10' : 'pl-3'} p-2.5 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-green-500 outline-none transition-all`} 
      />
    </div>
  </div>
);

export default EditProfile