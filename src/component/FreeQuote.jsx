import React, { useState } from 'react'

const FreeQuote = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    insuranceType: 'life',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Quote form submitted:', formData)
    alert('Thank you for your quote request! We will contact you shortly.')
    onClose()
  }

  return (
    <div className="backdrop-blur-none h-full px-4 pt-5 pb-4 sm:p-6 sm:pb-4 max-h-[80vh] sm:max-h-[75px]  md:max-h-[300px] overflow-y-auto ">
 
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div>
            <label htmlFor="quote-name" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              name="name"
              id="quote-name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#AF1F37] focus:border-[#AF1F37]"
            />
          </div>
          <div>
            <label htmlFor="quote-email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              name="email"
              id="quote-email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#AF1F37] focus:border-[#AF1F37]"
            />
          </div>
          <div>
            <label htmlFor="quote-phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              name="phone"
              id="quote-phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#AF1F37] focus:border-[#AF1F37]"
            />
          </div>
          <div>
            <label htmlFor="quote-insuranceType" className="block text-sm font-medium text-gray-700">Insurance Type</label>
            <select
              name="insuranceType"
              id="quote-insuranceType"
              value={formData.insuranceType}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#AF1F37] focus:border-[#AF1F37]"
            >
              <option value="life">Life Insurance</option>
              <option value="funeral">Funeral Cover</option>
              <option value="car">Car Insurance</option>
              <option value="home">Home Insurance</option>
              <option value="health">Health Insurance</option>
            </select>
          </div>
          <div>
            <label htmlFor="quote-message" className="block text-sm font-medium text-gray-700">Additional Information</label>
            <textarea
              name="message"
              id="quote-message"
              rows="3"
              value={formData.message}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#AF1F37] focus:border-[#AF1F37]"
            ></textarea>
          </div>
        </div>
        <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
          <button
            type="submit"
            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#AF1F37] text-base font-medium text-white hover:bg-[#8e1a2e] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#AF1F37] sm:col-start-2 sm:text-sm"
          >
            Request Quote
          </button>
          <button
            type="button"
            onClick={onClose}
            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#AF1F37] sm:mt-0 sm:col-start-1 sm:text-sm"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default FreeQuote