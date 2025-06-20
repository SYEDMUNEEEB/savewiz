import React from 'react'
import Layout from '../../layout/Layout'
import ImageSection from '../../component/ImageSection'
import Financial from '../../assets/finance.jpg'
import Debt from '../../assets/debt.jpg'
import Business from '../../assets/buisness.jpg'
import Restructure from '../../assets/debtrestructing.jpg'
import Button from '../../component/Button'

const FinancialInsurance = () => {
    const FinancialInsurance = [
        {
            id: 1,
            title: "Debt counselling",
            description: "Debt Counseling: Your Journey to Debt Relief Begins Here",
            image: Debt,
        },
        {
            id: 2,
            title: "Business funding",
            description: "Unlock Your Business Potential with Funding Solutions.",
            image: Business,
        },
        {
            id: 3,
            title: "Debt restructuring",
            description: "Rebuilding Your Financial Foundation.",
            image: Restructure,
        }
    ]
  return (
  <Layout>
    <ImageSection image={Financial} title="Financial Insurance" source={Financial} />
    <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 relative">
                <span className="relative inline-block">
                    Options
                </span>
            </h2>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">


<div className="grid grid-cols-1  md:grid-cols-1  lg:grid-cols-3 gap-8">
{FinancialInsurance.map((item) => (
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

export default FinancialInsurance