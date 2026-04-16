"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useUser } from '@/app/context/user-context/userContext'
import { Mail, Phone, MapPin, Globe } from 'lucide-react' 
import { getRows } from '@/app/utils/db'
import { useEffect, useState } from 'react'

interface UserProfileData {
  firstName: string;
  lastName: string;
  email: string;
  occupation?: string;
  description?: string;
  phoneNumber?: string;
  location?: string;
  website?: string;
  profileImage?: string;
}




const UserProfile = () => {
  const { user } = useUser()


  const [profileData, setProfileData] = useState<UserProfileData | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProfileData = async () => {
      setLoading(true);
      try {
        const data = await getRows(
          process.env.NEXT_PUBLIC_APPWRITE_USERS_PROFILE_TABLE_ID || 'user-profile',
          user?.email || ''
        );
        setProfileData(data);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      } finally {
        setLoading(false);
      }
    };

    if (user?.email) {
      fetchProfileData();
    } else {
      setLoading(false);
    }
  }, [user?.email]);



  return (
    <div className="w-full bg-white p-10">
      <div className="flex items-center justify-end mb-6">
        <Link href="/admin/edit-profile" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Edit Profile
        </Link>
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
            src={profileData?.profileImage || "/user-cover-image.jpg"} 
            alt="Profile" 
            width={128} 
            height={128} 
            className="object-cover h-full w-full" 
          />
        </div>
        <div className="pb-4 capitalize">
          <h3 className="text-2xl font-bold text-slate-800 font-poppins">{profileData?.firstName} {profileData?.lastName}</h3>
          <p className="text-slate-500 font-poppins text-sm">{profileData?.email}</p>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 p-8">
        {/* Left Sidebar: Contact Info */}
        <div className="md:col-span-1 space-y-6">
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
            <h4 className="font-bold mb-4 text-slate-800">Contact Details</h4>
            <div className="space-y-4 capitalize">
              <ContactItem icon={Mail} label="Email" value={profileData?.email} />
              <ContactItem icon={Phone} label="Phone" value={profileData?.phoneNumber || '+1 (123) 456-7890'} />
              <ContactItem icon={MapPin} label="Location" value={profileData?.location || 'New York, USA'} />
              <ContactItem icon={Globe} label="Website" value={profileData?.website || 'https://example.com'} />
              <ContactItem icon={Globe} label="Occupation" value={profileData?.occupation || 'Software Engineer'} />
            </div>
          </div>
        </div>

        {/* Right Content: About & Properties */}
        <div className="md:col-span-3 space-y-8">
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
            <h3 className="font-bold text-lg mb-2 text-slate-800">About Me</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              {profileData?.description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
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
const ContactItem = ({ icon: Icon, label, value }: { icon: any, label: string, value?: string | undefined }) => (
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