import { useState, useEffect, useRef } from 'react'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const navRef = useRef(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target) && 
          !event.target.closest('[data-menu-toggle]')) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen])

  // Detect scroll past hero section
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero')
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight
        const scrollPosition = window.scrollY + 100
        
        if (scrollPosition > heroBottom) {
          setIsScrolled(true)
        } else {
          setIsScrolled(false)
        }
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header 
      className={`fixed md:absolute top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md text-primary' 
          : 'bg-transparent text-white'
      }`}
    >
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:grid md:grid-cols-[auto_1fr_auto] md:gap-5">
          <a 
            href="#" 
            className="flex items-center gap-1 flex-shrink-0 z-[11] md:mr-auto" 
            onClick={closeMenu}
          >
            <img 
              src="/logo1.png" 
              alt="QuidSwap" 
              className="h-10 sm:h-12 md:h-[50px] w-auto object-contain" 
            />
          </a>
          
          <button 
            data-menu-toggle
            onClick={toggleMenu} 
            aria-label="Toggle menu"
            className={`md:hidden flex items-center justify-center w-10 h-10 p-2 flex-shrink-0 ml-auto transition-colors duration-300 ${
              isScrolled ? 'text-primary' : 'text-white'
            }`}
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
          
          <nav 
            ref={navRef}
            className={`md:flex md:items-center md:gap-8 lg:gap-14 md:justify-center md:flex-wrap ${
              isMenuOpen 
                ? 'flex flex-col absolute top-full left-0 right-0 bg-black/95 md:bg-transparent backdrop-blur-md md:backdrop-blur-none rounded-b-lg md:rounded-none shadow-lg md:shadow-none max-h-[300px] md:max-h-none opacity-100 md:opacity-100 p-2 md:p-0 z-10' 
                : 'hidden md:flex max-h-0 md:max-h-none opacity-0 md:opacity-100 overflow-hidden md:overflow-visible'
            } ${
              isScrolled && isMenuOpen 
                ? 'bg-white/98 md:bg-transparent' 
                : ''
            } transition-all duration-300`}
          >
            <a 
              href="#story" 
              onClick={closeMenu}
              className={`block md:inline-block text-sm md:text-base font-medium whitespace-nowrap transition-colors duration-300 text-white hover:text-[#c9a5f0] ${
                isMenuOpen 
                  ? 'px-5 py-3 md:px-0 md:py-0 hover:bg-white/10 md:hover:bg-transparent' 
                  : ''
              }`}
            >
              Exchange
            </a>
            <a 
              href="#account" 
              onClick={closeMenu}
              className={`block md:inline-block text-sm md:text-base font-medium whitespace-nowrap transition-colors duration-300 text-white hover:text-[#c9a5f0] ${
                isMenuOpen 
                  ? 'px-5 py-3 md:px-0 md:py-0 hover:bg-white/10 md:hover:bg-transparent' 
                  : ''
              }`}
            >
              Payouts
            </a>
            <a 
              href="#community" 
              onClick={closeMenu}
              className={`block md:inline-block text-sm md:text-base font-medium whitespace-nowrap transition-colors duration-300 text-white hover:text-[#c9a5f0] ${
                isMenuOpen 
                  ? 'px-5 py-3 md:px-0 md:py-0 hover:bg-white/10 md:hover:bg-transparent' 
                  : ''
              }`}
            >
              Community
            </a>
            <a 
              href="#about-us" 
              onClick={closeMenu}
              className={`block md:inline-block text-sm md:text-base font-medium whitespace-nowrap transition-colors duration-300 text-white hover:text-[#c9a5f0] ${
                isMenuOpen 
                  ? 'px-5 py-3 md:px-0 md:py-0 hover:bg-white/10 md:hover:bg-transparent' 
                  : ''
              }`}
            >
              About Us
            </a>
        </nav>
        </div>
      </div>
    </header>
  )
}

export default Header