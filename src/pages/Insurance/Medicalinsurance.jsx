import React from 'react'
import Layout from '../../layout/Layout'
import ImageSection from '../../component/ImageSection'
import Doctor from '../../assets/doctor.jpg'
import LadyDoctor from '../../assets/lady.jpg'
import Button from '../../component/Button'
import Ear from '../../assets/ear.jpg'
import Pet from '../../assets/Pet.jpg'

const DoctorInsurance = () => {
  const MedicalInsurance = [
    {
      id: 1,
      title: "Medical Insurance",
      description: "Medical insurance protection for family security",
      image: LadyDoctor,
    },
    {
      id: 2,
      title: "Gap Cover",
      description: "Bridging Financial Gaps in Medical Bills.",
      image: Ear,
    },
    {
      id: 3,
      title: "Pet Insurance",
      description: "Pet Health, Your Priority - Pet Insurance",
      image: Pet,
    }
  ]
  return (
    <Layout>
      <ImageSection image={Doctor} title="Medical Insurance" source={Doctor} />
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 relative">
            <span className="relative inline-block">
              Options
            </span>
          </h2>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">


            <div className="grid grid-cols-1  md:grid-cols-1  lg:grid-cols-3 gap-8">
              {MedicalInsurance.map((item) => (
                <div key={item.id} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col"
                  itemScope itemType="https://schema.org/InsuranceAgency">
                  <picture>
                    <source srcSet={item.image} type="image/avif" />
                    <img src={item.image} alt={item.title} className="w-full h-64 sm:h-72 object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" itemProp="image" />
                  </picture>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                    <div className="mt-4">
                      <Button title="Get Quote" className="w-full" />
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default DoctorInsurance