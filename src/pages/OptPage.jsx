import React, { useState } from "react";
import Layout from "../layout/Layout";
import colors from "../config/colors";

const OptInOutForm = () => {
    const colors = {
        primary: "#AF1F37",
        secondary: "#8e1a2e"
    }
    

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    optChoice: "optIn" 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
    alert(`Thank you for your submission. You have chosen to ${formData.optChoice === 'optIn' ? 'OPT IN' : 'OPT OUT'}.`);
    // Reset form after submission
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
      optChoice: "optIn"
    });
  };

  return (
    <Layout>

    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl my-8">
      <div className="p-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold" style={{ color: colors.primary }}>Opt In or Out</h2>
          <p className="mt-2 text-gray-600">
            Save Wise provides its clients with the option to easily opt in or opt out of our services.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border"
                required
              />
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message (Optional)
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Opt In Or Out
            </label>
            <div className="flex space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="optChoice"
                  value="optIn"
                  checked={formData.optChoice === "optIn"}
                  onChange={handleChange}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
                />
                <span className="ml-2 text-gray-700">Opt In</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="optChoice"
                  value="optOut"
                  checked={formData.optChoice === "optOut"}
                  onChange={handleChange}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
                />
                <span className="ml-2 text-gray-700">Opt Out</span>
              </label>
            </div>
          </div>


          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-3 font-medium rounded-md shadow-sm text-white transition-colors cursor-pointer"
              style={{ backgroundColor: colors.primary }}
              onMouseOver={e => e.currentTarget.style.backgroundColor = colors.secondary}
              onMouseOut={e => e.currentTarget.style.backgroundColor = colors.primary}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    </Layout>
  );
};

export default OptInOutForm;