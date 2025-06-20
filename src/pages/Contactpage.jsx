import React, { useState } from 'react'
import Layout from '../layout/Layout'


const ContactPage = () => {


  return (
    <Layout>
      <div className='bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-3xl mx-auto mt-20'>
          <div className='text-center mb-12'>
            <h1 className='text-4xl font-bold text-gray-900'>Contact Us</h1>
            <p className='text-lg text-gray-600'>
              Have questions or need assistance? Reach out to our team for support.
            </p>
          </div>

          <div className='bg-white shadow rounded-lg p-6 sm:p-8'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              <div>
                <h2 className='text-2xl font-semibold text-gray-800 mb-4'>Get in Touch</h2>
                <p className='text-gray-600 mb-6'>
                  Our team is ready to help you with any questions about our insurance products.
                </p>
                <div className='space-y-4'>
                  <div className='flex items-start'>
                    <div className='flex-shrink-0'>
                      <svg className="h-6 w-6 text-[#AF1F37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className='ml-3'>
                      <p className='text-lg font-medium text-gray-900'>Call us</p>
                      <p className='text-gray-600'>+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className='flex items-start'>
                    <div className='flex-shrink-0'>
                      <svg className="h-6 w-6 text-[#AF1F37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className='ml-3'>
                      <p className='text-lg font-medium text-gray-900'>Email us</p>
                      <p className='text-gray-600'>support@insurancecompany.com</p>
                    </div>
                  </div>
                  <div className='flex items-start'>
                    <div className='flex-shrink-0'>
                      <svg className="h-6 w-6 text-[#AF1F37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className='ml-3'>
                      <p className='text-lg font-medium text-gray-900'>Visit us</p>
                      <p className='text-gray-600'>123 Insurance St, Financial District</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className='text-2xl font-semibold text-gray-800 mb-4'>Send a Message</h2>
                <form className='space-y-4'>
                  <div>
                    <label htmlFor='name' className='block text-sm font-medium text-gray-700'>Name</label>
                    <input
                      type='text'
                      id='name'
                      name='name'
                      className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#AF1F37] focus:border-[#AF1F37]'
                    />
                  </div>
                  <div>
                    <label htmlFor='email' className='block text-sm font-medium text-gray-700'>Email</label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#AF1F37] focus:border-[#AF1F37]'
                    />
                  </div>
                  <div>
                    <label htmlFor='message' className='block text-sm font-medium text-gray-700'>Message</label>
                    <textarea
                      id='message'
                      name='message'
                      rows='4'
                      className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#AF1F37] focus:border-[#AF1F37]'
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type='submit'
                      className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#AF1F37] hover:bg-[#8e1a2e] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#AF1F37]'
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>

          
          </div>
        </div>
      </div>

     
    </Layout>
  )
}

export default ContactPage