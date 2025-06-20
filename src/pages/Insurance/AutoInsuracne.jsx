import React from 'react'
import Layout from '../../layout/Layout'
import Auto from '../../assets/auto.jpg'
import carOne from '../../assets/car-one.jpg'
import carTwo from '../../assets/carTwo.jpg'
import carThree from '../../assets/car-three.jpg'
import Button from '../../component/Button'
import ImageSection from '../../component/ImageSection'


const AutoInsuracne = () => {
const AutoInsurance = [
    {
        id: 1,
        title: "Car insurance",
        description: "Protect your vehicle affordably.",
        image: carOne,
    },
    {
        id: 2,
        title: "Car & Home Combination",
        description: "Bundle for savings on both.",
        image: carTwo,
    },
    {
        id: 3,
        title: "Test Brown",
        description: "Stay safe on two wheels.",
        image: carThree,
    }
]

  return (
<Layout>
  <ImageSection image={Auto} title="Auto Insurance" source={Auto} />

      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 relative">
                <span className="relative inline-block">
                   Options
                </span>
            </h2>
            <div className="grid grid-cols-1  md:grid-cols-1  lg:grid-cols-3 gap-8">
                {AutoInsurance.map((item) => (
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
          </div>
           
      </section>

</Layout>
  )
}

export default AutoInsuracne