"use client"

import React, { useState, useRef } from 'react'
import Image from 'next/image'
import { User, Mail, Briefcase, Phone, Globe, Trash2, Camera, Loader2 } from 'lucide-react'
import { createRows } from '../../../utils/db'
import { useUser } from '@/app/context/user-context/userContext'
import { uploadFile } from '@/app/utils/storage'

interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
  occupation?: string;
  description?: string;
  phoneNumber?: string;
  website?: string;
  location?: string;
  profileImage?: string; // This would store the File ID or URL
}

const EditProfile: React.FC = () => {
  const { user } = useUser()
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const [profile, setProfile] = useState<UserProfile>({
    firstName: '',
    lastName: '',
    email: user?.email || '',
    occupation: '',
    description: '',
    phoneNumber: '',
    website: '',
    location: ''

  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  // Handle image selection and preview
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveChanges = async () => {
    setLoading(true);
    try {
      let profileImageUrl = profile.profileImage;

      const BUCKET_ID = process.env.NEXT_PUBLIC_APPWRITE_STORAGE_BUCKET_ID;

      if (!selectedFile) {
        console.warn('No file selected for upload — skipping file upload.');
      } else if (!BUCKET_ID) {
        console.error('Missing NEXT_PUBLIC_APPWRITE_STORAGE_BUCKET_ID env var');
        throw new Error('Upload configuration missing: NEXT_PUBLIC_APPWRITE_STORAGE_BUCKET_ID');
      } else {
        console.log('Uploading file to bucket:', BUCKET_ID);
        const uploaded = await uploadFile(BUCKET_ID, selectedFile);
        const fileUrl = `${process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT}/storage/buckets/${BUCKET_ID}/files/${uploaded.$id}/view?project=${process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID}`;
        profileImageUrl = fileUrl;
      }

      await createRows(
        process.env.NEXT_PUBLIC_APPWRITE_USERS_PROFILE_TABLE_ID || 'user-profile', 
        {
          ...profile,
          profileImage: profileImageUrl
          // profileImage: uploadedFileId 
        }
      );
      alert("Profile updated successfully!");
    } catch (error) {
      console.error('Error saving changes:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full p-4 md:p-10 bg-gray-50 min-h-screen">
      {/* Cover Image */}
      <div className="relative w-full h-64 rounded-xl mb-10 overflow-hidden shadow-lg">
        <Image src="/user-cover-image.jpg" alt="Cover" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
        {/* Left Sidebar Profile Card */}
        <div className='md:col-span-1 bg-white p-8 rounded-xl shadow-sm flex flex-col items-center gap-6 h-fit border border-gray-100'>
          <div className='relative group cursor-pointer' onClick={() => fileInputRef.current?.click()}>
            <div className='relative w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-xl bg-gray-100'>
              <Image 
                src={imagePreview || "/user-cover-image.jpg"} 
                alt="Profile" 
                fill
                className="object-cover" 
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                <Camera className="text-white" size={24} />
              </div>
            </div>
            <button className="absolute bottom-1 right-1 bg-green-600 p-2 rounded-full text-white shadow-lg border-2 border-white">
              <Camera size={16} />
            </button>
            <input 
              type="file" 
              ref={fileInputRef} 
              className="hidden" 
              accept="image/*" 
              onChange={handleImageChange} 
            />
          </div>
          
          <div className="text-center">
            <h2 className="text-xl font-bold text-gray-800">{profile.firstName || user?.name || 'New User'}</h2>
            <p className="text-gray-500 text-sm">{user?.email}</p>
          </div>
        </div>

        {/* Right Content Area */}
        <div className='md:col-span-3 space-y-8'>
          <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold mb-6 border-b pb-2">Personal Details :</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Profile Image Action (Integrated into inputs) */}
              <div className="col-span-full mb-4 flex items-center gap-4 p-4 bg-gray-50 rounded-lg border border-dashed border-gray-300">
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-gray-700">Profile Picture</h4>
                  <p className="text-xs text-gray-500">JPG, GIF or PNG. Max size of 2MB</p>
                </div>
                <button 
                  onClick={() => fileInputRef.current?.click()}
                  className="text-sm bg-white border px-4 py-2 rounded-md font-medium hover:bg-gray-50 transition-colors"
                >
                  Upload New
                </button>
              </div>

              <FormInput 
                label="First Name" 
                required 
                icon={<User size={18}/>} 
                name="firstName"
                value={profile.firstName}
                placeholder="Enter first name"
                onChange={handleInputChange}
              />
              <FormInput 
                label="Last Name" 
                required 
                icon={<User size={18}/>} 
                name="lastName"
                value={profile.lastName}
                placeholder="Enter last name"
                onChange={handleInputChange}
              />
              <FormInput 
                label="Email" 
                required 
                icon={<Mail size={18}/>} 
                name="email"
                value={profile.email}
                placeholder="Email address"
                onChange={handleInputChange}
              />
              <FormInput 
                label="Occupation" 
                icon={<Briefcase size={18}/>} 
                name="occupation"
                value={profile.occupation}
                placeholder="Software Engineer"
                onChange={handleInputChange}
              />
              
              <div className="col-span-full space-y-2">
                <label className="text-sm font-medium text-gray-700">Bio / Description :</label>
                <textarea 
                  name="description"
                  value={profile.description}
                  onChange={handleInputChange}
                  rows={4} 
                  className="w-full p-2.5 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-green-500 outline-none transition-all resize-none" 
                  placeholder="Tell us about yourself..."
                />
              </div>
            </div>

            <div className="mt-8 border-t pt-8">
              <h3 className="text-lg font-semibold mb-6">Contact Info :</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormInput 
                  label="Phone No." 
                  icon={<Phone size={18}/>} 
                  name="phoneNumber"
                  value={profile.phoneNumber}
                  placeholder="+1 (555) 000-0000"
                  onChange={handleInputChange}
                />
                <FormInput 
                  label="Website" 
                  icon={<Globe size={18}/>} 
                  name="website"
                  value={profile.website}
                  placeholder="https://yourwebsite.com"
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <button 
              onClick={handleSaveChanges}
              disabled={loading}
              className="mt-8 bg-green-600 hover:bg-green-700 text-white px-10 py-3 rounded-lg font-bold transition-all flex items-center gap-2 disabled:bg-gray-400"
            >
              {loading && <Loader2 className="animate-spin" size={20} />}
              {loading ? 'Saving...' : 'Save Changes'}
            </button>
          </section>

          <section className="bg-white p-6 rounded-xl shadow-sm border border-red-100">
            <h3 className="text-lg font-semibold mb-2 text-red-600 flex items-center gap-2">
              <Trash2 size={20} /> Delete Account :
            </h3>
            <p className="text-gray-500 text-sm mb-4">Once you delete your account, there is no going back. Please be certain.</p>
            <button className="bg-red-50 hover:bg-red-100 text-red-600 px-6 py-2 rounded-lg font-medium transition-colors border border-red-200">
              Delete Account
            </button>
          </section>
        </div>
      </div>
    </div>
  )
}

// ... FormInput Component stays the same ...
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