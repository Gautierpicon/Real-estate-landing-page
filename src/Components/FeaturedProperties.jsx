import React from 'react'
import properties from '../properties';
import { FaHeart } from 'react-icons/fa';

const FeaturedProperties = () => {
  return (
    <section className='max-w-7xl mx-auto py-16 px-4'>
      <h2 className='text-3xl font-bold mb-8'>
        Featured properties
      </h2>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {properties.map((property) => (
          <div 
          key={property.id}
          className='bg-white rounded-2xl drop-shadow-lg overflow-hidden hover:drop-shadow-xl hover:scale-105 transition-all duration-300 relative group cursor-pointer'
          >
            <div className="relative">
              <img src={property.image} className='w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300' />
              <button className='absolute top-4 right-4 p-2 rounded-full bg-white/70 hover:bg-white transition-colors duration-200'>
                <FaHeart className='text-gray-600 hover:text-red-500 transition-colors duration-200'/>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeaturedProperties