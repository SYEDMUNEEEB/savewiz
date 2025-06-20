import React from 'react'
import Layout from '../../layout/Layout'
import Auto from '../../assets/auto.jpg'
import carOne from '../../assets/car-one.jpg'
import Button from '../../component/Button'

const AutoInsuracne = () => {
  return (
<Layout>
  
<section className="relative w-full h-[50vh] sm:h-[70vh]" itemScope itemType="https://schema.org/FinancialProduct">
        <picture>
          <source srcSet={Auto} type="image/avif" />
          <img
            src={Auto}
            alt="Comprehensive insurance solutions"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
            itemProp="image"
          />
        </picture>
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center px-4 max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4" itemProp="name">
            Auto Insurance
            </h1>
           
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 relative">
                <span className="relative inline-block">
                   Options
                </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full" 
               itemScope itemType="https://schema.org/InsuranceAgency">
                <picture>
                    <source srcSet={carOne} type="image/avif" />
                    <img src={carOne} alt="Auto Insurance" className="w-full h-64 sm:h-72 object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" itemProp="image" />
                </picture>
                <div className="p-6">
                    <h3 className="text-xl font-bold mb-4">
                    Car insurance 
                    </h3>
                    <p className="text-gray-600">
                    Protect your vehicle affordably.
                    </p>
                    <Button title="Get Quote" />
                </div>
                </div>
            </div>
        </div>
      </section>

</Layout>
  )
}

export default AutoInsuracne