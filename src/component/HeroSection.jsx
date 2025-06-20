import Hero from "../assets/04.jpg";
import colors from "../config/colors";
import Button from "./Button";


const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={Hero}
          alt="Savewise Insurance"
          className="w-full h-full object-cover object-center opacity-70 sm:opacity-75 md:opacity-80 lg:opacity-85 blur-[1px] sm:blur-[2px] transition-all duration-500"
        />
        {/* Gradient Overlay */}
        <div 
          className="absolute inset-0 mix-blend-multiply"
          style={{
            background: `linear-gradient(to top, ${colors.primary}80, ${colors.secondary}40, transparent 60%)`
          }}
        />
      </div>

      {/* Main Content - Proper spacing from fixed navbar */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-12 lg:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto">
          <div className="space-y-4 sm:space-y-6 lg:space-y-8 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 rounded-xl sm:rounded-2xl border border-white/15 sm:border-white/20 shadow-xl sm:shadow-2xl bg-white/5 sm:bg-white/10 backdrop-blur-sm">
            
            {/* Main Heading */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white drop-shadow-lg text-center">
              <span className="block opacity-95 mb-1 sm:mb-2">"We Connect</span>
              <span className="block opacity-90">You Protect"</span>
            </h1>

            {/* Description Text */}
            <div className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto drop-shadow-md text-center space-y-3 sm:space-y-4">
              <p className="leading-relaxed">
                At Save Wise, we're your insurance bridge. Navigating the world of coverage can be complex, but we simplify it for you.
              </p>
              <p className="leading-relaxed">
                We connect everyday individuals with top insurance brands, ensuring your peace of mind. Our experts find the best coverage options tailored to your needs.
              </p>
              <p className="leading-relaxed">
                Trust us to safeguard your future, so you can focus on what matters most. With Save Wise, you're getting a partner dedicated to your protection.
              </p>
            </div>

            {/* CTA Button */}
            <Button title="Get Your Free Quote" />
          </div>
        </div>
      </div>

      {/* Optional: Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg 
            className="w-5 h-5 sm:w-6 sm:h-6 text-white/60" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;