import React from 'react'
import { ChevronRight } from 'lucide-react'

const PropertyPage = () => {
  return (
    <div>
      <div>
        <h2>Explore Properties</h2>
        <div>
          <h1>PrimePath</h1>
          <ChevronRight size={20} className="inline mx-1" />
          <p>Property Details</p>
        </div>
      </div>
      <div>
        {/* property will be displayed here */}
      </div>
    </div>
  )
}

export default PropertyPage