import React from 'react'
import colors from '../config/colors'

const Button = () => {
  return (
    <div className="flex justify-center pt-2 sm:pt-4 lg:pt-6">
      <button 
        className="relative overflow-hidden group text-white/95 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 rounded-md sm:rounded-lg shadow-lg cursor-pointer hover:scale-105 hover:shadow-xl transition-all duration-300 text-sm sm:text-base md:text-lg font-semibold w-fit border border-white/20 hover:border-white/30 active:scale-95"
        style={{
          background: `linear-gradient(to right, ${colors.primary}95, ${colors.secondary}95)`
        }}
      >
        <span className="relative z-10">Get Your Free Quote</span>
        <span 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ backgroundColor: `${colors.secondary}90` }}
        ></span>
      </button>
    </div>
  )
}

export default Button