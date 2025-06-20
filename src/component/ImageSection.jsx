import React from 'react'

const ImageSection = ({ image, title, source, alt }) => {
  return (
    <section className="relative w-full h-[50vh] sm:h-[70vh]" itemScope itemType="https://schema.org/FinancialProduct">
      <picture>
        <source srcSet={source} type="image/avif" />
        <img 
          src={image} 
          alt={alt || title} 
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </picture>
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <div className="text-center px-4 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4" itemProp="name">
            {title}
          </h1>
        </div>
      </div>
    </section>
  )
}

export default ImageSection