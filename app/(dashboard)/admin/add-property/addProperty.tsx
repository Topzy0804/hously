"use client"

import { ChevronRight } from 'lucide-react'
import { createRows } from '../../../utils/db'
import { uploadFile } from '@/app/utils/storage'
import { useState, useRef, useEffect } from 'react'

const AddProperty = () => {
  const [propertyImages, setPropertyImages] = useState<File[]>([])
  const [previewUrls, setPreviewUrls] = useState<string[]>([])
  const prevUrlsRef = useRef<string[]>([])
  const fileInputRef = useRef<HTMLInputElement | null>(null)

  const [propertyDetails, setPropertyDetails] = useState({
    title: '',
    squareFt: '',
    beds: '',
    baths: '',
    price: '',
    images: []
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setPropertyDetails(prevDetails => ({
      ...prevDetails,
      [name]: value
    }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files) return

    const newFiles = Array.from(files)
    setPropertyImages(prev => [...prev, ...newFiles])

    const newUrls = newFiles.map(f => URL.createObjectURL(f))
    prevUrlsRef.current = [...prevUrlsRef.current, ...newUrls]
    setPreviewUrls(prev => [...prev, ...newUrls])
  }

  useEffect(() => {
    return () => {
      prevUrlsRef.current.forEach(url => URL.revokeObjectURL(url))
      prevUrlsRef.current = []
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    let uploadedImageUrls: string[] = []
    try {
      if (propertyImages && propertyImages.length > 0) {
        const BUCKET_ID = process.env.NEXT_PUBLIC_APPWRITE_STORAGE_BUCKET_ID
        const ENDPOINT = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT
        const PROJECT_ID = process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID

        if (!BUCKET_ID) {
          console.error('Missing NEXT_PUBLIC_APPWRITE_STORAGE_BUCKET_ID env var')
          throw new Error('Upload configuration missing: NEXT_PUBLIC_APPWRITE_STORAGE_BUCKET_ID')
        }

        uploadedImageUrls = await Promise.all(
          propertyImages.map(async file => {
            const uploaded = await uploadFile(BUCKET_ID, file)
            return `${ENDPOINT}/storage/buckets/${BUCKET_ID}/files/${uploaded.$id}/view?project=${PROJECT_ID}`
          })
        )
      }

      await createRows('properties', {
        title: propertyDetails.title,
        squareFt: propertyDetails.squareFt,
        beds: propertyDetails.beds,
        baths: propertyDetails.baths,
        price: propertyDetails.price,
        images: uploadedImageUrls
      })

      // reset form
      setPropertyDetails({ title: '', squareFt: '', beds: '', baths: '', price: '' })
      setPropertyImages([])
      prevUrlsRef.current.forEach(url => URL.revokeObjectURL(url))
      prevUrlsRef.current = []
      setPreviewUrls([])
      if (fileInputRef.current) fileInputRef.current.value = ''
    } catch (error) {
      console.error('Error creating property:', error)
    }
  }

  return (
    <div className="p-4 lg:p-8 w-full flex flex-col gap-6 bg-slate-100">
      <div className="flex justify-between items-center gap-2">
        <h1 className="text-2xl font-bold font-montserrat text-slate-800 mb-4">Add New Property</h1>
        <div className='flex gap-2 justify-center items-center'>
          <h2 className='text-2xl font-bold font-montserrat'>PrimePath</h2>
          <ChevronRight size={20} className="inline mx-1" />
          <p></p>
        </div>
      </div>

      <div className="bg-slate-100 p-6 shadow-sm grid grid-cols-2 gap-10 ">
        <div className="rounded-xl border border-slate-200 p-6 flex flex-col gap-4">
          <h3 className='text-xl font-montserrat font-bold capitalize'>upload your property images</h3>
          <input
            ref={fileInputRef}
            onChange={handleFileChange}
            type="file"
            name="property-images"
            id="property-images"
            multiple
            accept="image/*"
            className="border border-gray-300 font-poppins text-lg rounded-md p-4 w-full"
          />
          <div className="flex gap-2 flex-wrap">
            {previewUrls.map((url, idx) => (
              <img key={url} src={url} alt={`preview-${idx}`} className="w-28 h-20 object-cover rounded" />
            ))}
          </div>
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="bg-blue-500 font-poppins text-lg text-white py-4 px-4 rounded-md hover:bg-blue-600"
          >
            Choose Images
          </button>
        </div>

        <div className="flex flex-col gap-10 rounded-xl border border-slate-200 p-6">
          <h3 className='text-xl font-montserrat font-bold capitalize'>Property Details</h3>
          <form onSubmit={handleSubmit} className="flex font-poppins text-lg flex-col gap-6">
            <div>
              <label htmlFor="property-name">Title</label>
              <input
                type="text"
                name="title"
                id="property-name"
                value={propertyDetails.title}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md p-4 w-full"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label htmlFor="square-ft">Square ft</label>
                <input
                  type="text"
                  name="squareFt"
                  id="square-ft"
                  value={propertyDetails.squareFt}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-md p-4 w-full"
                />
              </div>
              <div>
                <label htmlFor="beds">Beds</label>
                <input
                  type="text"
                  name="beds"
                  id="beds"
                  value={propertyDetails.beds}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-md p-4 w-full"
                />
              </div>
              <div>
                <label htmlFor="baths">Baths</label>
                <input
                  type="text"
                  name="baths"
                  id="baths"
                  value={propertyDetails.baths}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-md p-4 w-full"
                />
              </div>
            </div>
            <div>
              <label htmlFor="price">Price</label>
              <input
                type="text"
                name="price"
                id="price"
                value={propertyDetails.price}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md p-4 w-full"
              />
            </div>
            <button type="submit" className="bg-blue-500 text-white py-4 px-4 rounded-md hover:bg-blue-600">
              Add Property
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddProperty