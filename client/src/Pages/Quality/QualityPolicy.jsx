import React from 'react'

export default function QualityPolicy() {
  const contactUsImage = './hero4.jpg'


  return (
    <div className="py-16">
  <div className="relative bg-cover bg-center h-64">
    <img src={contactUsImage} alt="About Us" className="w-full h-full object-cover" />
    <div className="absolute inset-0 bg-gold opacity-50"></div>
    <div className="absolute inset-0 flex items-center justify-center flex-col">
      <h1 className="text-black text-4xl font-bold mb-3">Quality Policy</h1>
    </div>
  </div>
  
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap items-center justify-center">
      {/* Image */}
      <div className="w-full md:w-1/2 px-4 mb-8 mt-20 md:mt-40">
        <img src="./hero4.jpg" alt="Quality Policy" className="w-full h-auto rounded-lg shadow-lg" />
      </div>
      
      {/* Content */}
      <div className="w-full md:w-1/2 px-4 mt-20 md:mt-40">
        <h1 className="text-3xl font-bold mb-4">Our Quality Policy</h1>
        <p className="text-lg text-gray-700 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor elit eget
          augue ultricies, eu pharetra lacus fermentum. Duis auctor ipsum vitae ipsum
          ultricies dapibus. Vestibulum ac orci ac dui hendrerit lacinia.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Sed euismod leo vel augue ullamcorper, non lacinia libero pellentesque. Curabitur
          pharetra libero non diam bibendum vestibulum. Nulla ultrices, nulla nec sodales
          suscipit, libero risus placerat felis, non bibendum dolor elit eu nisl.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Fusce at ullamcorper libero. Proin ultrices turpis sit amet dui fringilla, eget
          tempus lorem aliquam. Vivamus non suscipit est. Curabitur ut ligula et ligula
          ultrices sollicitudin.
        </p>
      </div>
    </div>
  </div>
</div>
  )
}
