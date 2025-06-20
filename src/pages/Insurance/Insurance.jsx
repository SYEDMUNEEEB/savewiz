import React from 'react'
import Layout from '../../layout/Layout'
import insuranceHero from "../../assets/insurance.jpg"

import lifeInsurance from "../../assets/lifeinsurance.jfif"
import funeralInsurance from "../../assets/funeral.jfif"
import carInsurance from '../../assets/car.jfif'
import Button from '../../component/Button'
import ImageSection from '../../component/ImageSection'

const Insurance = () => {
  const InsuranceProducts = [
    {
      id: 1,
      title: "Life Insurance",
      description: "Life insurance protection for family security",
      image: lifeInsurance,
      source: lifeInsurance,
    },
    {
      id: 2,
      title: "Funeral Insurance",
      description: "Funeral insurance protection for family security",
      image: funeralInsurance,
      source: funeralInsurance,
    },
    {
      id: 3,
      title: "Car Insurance",
      description: "Car insurance protection for family security",
      image: carInsurance,
      source: carInsurance,
    }
  ]
  return (
    <Layout>
      <ImageSection image={insuranceHero} title="Insurance Solutions" source={insuranceHero} alt="Insurance Solutions" />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 relative">
          <span className="relative inline-block">
            Our Insurance Products
          
          </span>
        </h2>

        <div className="grid grid-cols-1  md:grid-cols-1  lg:grid-cols-3 gap-8">
                {InsuranceProducts.map((item) => (
                    <div key={item.id} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full" 
                    itemScope itemType="https://schema.org/InsuranceAgency">
                        <picture>
                            <source srcSet={item.image} type="image/avif" />
                            <img src={item.image} alt={item.title} className="w-full h-64 sm:h-72 object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" itemProp="image" />
                        </picture>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                            <p className="text-gray-600">{item.description}</p>
                            <Button   title="Get Quote"  />
                        </div>
                    </div>
                ))}

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