function Footer() {
  return (
    <footer className="bg-primary text-white py-8 sm:py-10 md:py-12">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-start">
          <div className="w-full">
            <p className="text-[#cfcfc8] text-sm sm:text-base mb-2">Contact QuidSwap at:</p>
            <a 
              href="mailto:quidswap@quidax.com" 
              className="inline-flex items-center gap-1 text-white font-semibold text-sm sm:text-base md:text-lg break-words hover:opacity-80 transition-opacity"
            >
              quidswap@quidax.com 
              <span className="text-xs flex-shrink-0">↗</span>
            </a>
          </div>
          
          <nav className="flex flex-wrap gap-4 sm:gap-5 md:gap-6 justify-start md:justify-end">
            <a 
              href="#hero" 
              className="text-white text-sm sm:text-base no-underline hover:opacity-80 transition-opacity whitespace-nowrap"
            >
              Home
            </a>
            <a 
              href="#story" 
              className="text-white text-sm sm:text-base no-underline hover:opacity-80 transition-opacity whitespace-nowrap"
            >
              Story
            </a>
            <a 
              href="#account" 
              className="text-white text-sm sm:text-base no-underline hover:opacity-80 transition-opacity whitespace-nowrap"
            >
              Account
            </a>
            <a 
              href="#community" 
              className="text-white text-sm sm:text-base no-underline hover:opacity-80 transition-opacity whitespace-nowrap"
            >
              Community
            </a>
            <a 
              href="#about-us" 
              className="text-white text-sm sm:text-base no-underline hover:opacity-80 transition-opacity whitespace-nowrap"
            >
              About Us
            </a>
          </nav>
        </div>
        
        <div className="flex justify-center mt-6 sm:mt-8">
          <img 
            src="/logo1.png" 
            alt="QuidSwap" 
            className="max-w-[180px] sm:max-w-[220px] md:max-w-[400px] lg:max-w-[480px] xl:max-w-[550px] h-auto"
          />
        </div>
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4 pt-6 sm:pt-8 border-t border-white/10 mt-6 sm:mt-8">
          <span className="text-[#cfcfc8] text-xs sm:text-sm">
            © {new Date().getFullYear()} QuidSwap. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer