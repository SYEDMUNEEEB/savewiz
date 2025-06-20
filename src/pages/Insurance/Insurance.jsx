import React from 'react'
import Layout from '../../layout/Layout'
import insuranceHero from "../../assets/insurance.jpg"

import lifeInsurance from "../../assets/lifeinsurance.jfif"
import funeralInsurance from "../../assets/funeral.jfif"
import carInsurance from '../../assets/car.jfif'
import Button from '../../component/Button'

const Insurance = () => {
  return (
    <Layout>
   
      <section className="relative w-full h-[50vh] sm:h-[70vh]" itemScope itemType="https://schema.org/FinancialProduct">
        <picture>
          <source srcSet={insuranceHero} type="image/avif" />
          <img
            src={insuranceHero}
            alt="Comprehensive insurance solutions"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
            itemProp="image"
          />
        </picture>
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center px-4 max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4" itemProp="name">
            Insurance Solutions
            </h1>
           
          </div>
        </div>
      </section>

      {/* Insurance Products Section with schema.org markup */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 relative">
          <span className="relative inline-block">
            Our Insurance Products
          
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Life Insurance Card */}
          <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full" 
               itemScope itemType="https://schema.org/InsuranceAgency">
            <picture>
              <source srcSet={lifeInsurance} type="image/avif" />
              <img
                src={lifeInsurance}
                alt="Life insurance protection for family security"
                className="w-full h-64 sm:h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                itemProp="image"
              />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-2xl font-bold text-white mb-2" itemProp="name">Life Insurance</h3>
              <p className="text-white/90 mb-4" itemProp="description">Secure your family's financial future with our comprehensive life insurance plans</p>
              <Button title="Get Quote" />
            </div>
            <meta itemProp="serviceType" content="Life Insurance" />
          </div>

          {/* Funeral Insurance Card */}
          <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full" 
               itemScope itemType="https://schema.org/InsuranceAgency">
            <picture>
              <source srcSet={funeralInsurance} type="image/avif" />
              <img
                src={funeralInsurance}
                alt="Affordable funeral insurance coverage"
                className="w-full h-64 sm:h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                itemProp="image"
              />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-2xl font-bold text-white mb-2" itemProp="name">Funeral Cover</h3>
              <p className="text-white/90 mb-4" itemProp="description">Ensure a dignified farewell for your loved ones with our funeral plans</p>
              <Button title="Get Quote" />

            </div>
            <meta itemProp="serviceType" content="Funeral Insurance" />
          </div>

          {/* Car Insurance Card */}
          <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full" 
               itemScope itemType="https://schema.org/InsuranceAgency">
            <picture>
              <source srcSet={carInsurance} type="image/avif" />
              <img
                src={carInsurance}
                alt="Comprehensive car insurance protection"
                className="w-full h-64 sm:h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                itemProp="image"
              />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-2xl font-bold text-white mb-2" itemProp="name">Car Insurance</h3>
              <p className="text-white/90 mb-4" itemProp="description">Complete vehicle protection with competitive rates and excellent coverage</p>
              <Button title="Get Quote" />

            </div>
            <meta itemProp="serviceType" content="Auto Insurance" />
          </div>
        </div>
      </section>

      {/* Additional SEO-friendly content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">Why Choose Our Insurance Solutions?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2 text-[#AF1F37]">Trusted Coverage</h3>
            <p>Backed by years of industry experience and financial stability</p>
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2 text-[#AF1F37]">Competitive Rates</h3>
            <p>Affordable premiums without compromising on coverage quality</p>
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2 text-[#AF1F37]">24/7 Support</h3>
            <p>Dedicated customer service whenever you need assistance</p>
          </div>
        </div>
       
       <Button title="Get Quote" />
      </section>
    </Layout>
  )
}

export default Insurance