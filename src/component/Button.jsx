import React, { useState } from 'react'
import colors from '../config/colors'
import Modal from '../layout/Modal'
import FreeQuote from './FreeQuote'

const Button = ({title,style}) => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const handleQuoteClick = () => {
    setQuoteModalOpen(true);
  };

  const handleQuoteSubmit = (formData) => {
    
    console.log('Quote form submitted:', formData);
    
    
    setQuoteModalOpen(false);
    
    
  
  };

  const handleQuoteCancel = () => {
    setQuoteModalOpen(false);
  };
  return (
    <div className="flex justify-center pt-2 sm:pt-4 lg:pt-6">
      

      <button 
        className="relative overflow-hidden group text-white/95 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 rounded-md sm:rounded-lg shadow-lg cursor-pointer hover:scale-105 hover:shadow-xl transition-all duration-300 text-sm sm:text-base md:text-lg font-semibold w-fit border border-white/20 hover:border-white/30 active:scale-95"
        style={{
          background: `linear-gradient(to right, ${colors.primary}95, ${colors.secondary}95)`
        }}
        onClick={handleQuoteClick}
      >
        <span className="relative z-10">{title}</span>
        <span 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ backgroundColor: `${colors.secondary}90` }}
        ></span>
      </button>

      <Modal
  isOpen={quoteModalOpen}
  onClose={handleQuoteCancel}
  title="Get a Free Quote"
>
  <FreeQuote onSubmit={handleQuoteSubmit} onClose={handleQuoteCancel} />
</Modal>




    
    </div>
  )
}
Button.defaultProps = {
  style: {
    background: `linear-gradient(to right, ${colors.primary}95, ${colors.secondary}95)`,
    border: `1px solid ${colors.primary}95`,
    color: `#fff`
  }
}

export default Button
