import { useScrollAnimation } from '../../hooks/useScrollAnimation'

function Story() {
  const [textRef, textVisible] = useScrollAnimation({ threshold: 0.2 })
  const [collageRef, collageVisible] = useScrollAnimation({ threshold: 0.2 })

  return (
    <section id="story" className="bg-[#FDFCF8] text-primary py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-6 sm:gap-8 md:gap-10 items-start">
          <div 
            ref={textRef} 
            className={`fade-in-left ${textVisible ? 'visible' : ''} w-full`}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[28px] font-bold mb-3 sm:mb-4 md:mb-6 lg:mb-12 mt-0 lg:mt-16 leading-tight">
              Exchange crypto like you message friends.
            </h2>
            <p className="text-muted text-sm sm:text-base leading-relaxed mb-3">
              QuidSwap turns WhatsApp into your trusted exchange. Chat to convert, confirm in seconds, and get NGN instantly to your account.
            </p>
            <p className="text-muted text-sm sm:text-base leading-relaxed mb-0">
              Clear rates, fast settlement, human support when you need it.
            </p>
          </div>
          
          <div 
            ref={collageRef} 
            className={`fade-in-right ${collageVisible ? 'visible' : ''} relative h-[220px] sm:h-[280px] md:h-[320px] lg:h-[395px] flex items-center justify-center px-4 sm:px-6 md:px-8 overflow-visible`}
            aria-hidden="true"
          >
            {/* QDX Coin - Top Center (Triangle Apex) */}
            <img 
              src="/qdx.jpg" 
              alt="QDX Coin" 
              className={`absolute rounded-full object-cover aspect-square 
                          w-[120px] sm:w-[140px] md:w-[160px] lg:w-[190px] 
                          left-1/2 top-[8%] sm:top-[10%] md:top-[10%]
                          -translate-x-1/2 
                          z-[3] 
                          shadow-[0_8px_24px_rgba(0,0,0,0.15)] 
                          opacity-0 scale-[0.8] transition-all duration-[800ms] ease-out delay-[100ms]
                          stagger-1 ${collageVisible ? '!opacity-100 !scale-100' : ''}`}
              style={{ clipPath: 'circle(50% at 50% 50%)' }}
            />
            
            {/* USDT Coin - Bottom Left (Triangle Base Left) */}
            <img 
              src="/usdt.jpg" 
              alt="USDT Coin" 
              className={`absolute rounded-full object-cover aspect-square 
                          w-[100px] sm:w-[110px] md:w-[150px] lg:w-[190px] 
                          left-[32%] sm:left-[28%] md:left-[30%] lg:left-[28%] 
                          top-[78%] sm:top-[75%] md:top-[78%] lg:top-[75%] 
                          -translate-x-1/2 -translate-y-1/2 
                          z-[2] 
                          shadow-[0_8px_24px_rgba(0,0,0,0.15)] 
                          opacity-0 scale-[0.8] transition-all duration-[800ms] ease-out delay-[200ms]
                          stagger-2 ${collageVisible ? '!opacity-100 !scale-100' : ''}`}
              style={{ clipPath: 'circle(50% at 50% 50%)' }}
            />
            
            {/* BTC Coin - Bottom Right (Triangle Base Right) */}
            <img 
              src="/btc.jpg" 
              alt="BTC Coin" 
              className={`absolute rounded-full object-cover aspect-square 
                          w-[100px] sm:w-[110px] md:w-[150px] lg:w-[195px] 
                          left-[68%] sm:left-[72%] md:left-[70%] lg:left-[72%] 
                          top-[78%] sm:top-[75%] md:top-[78%] lg:top-[75%] 
                          -translate-x-1/2 -translate-y-1/2 
                          z-[1] 
                          shadow-[0_8px_24px_rgba(0,0,0,0.15)] 
                          opacity-0 scale-[0.8] transition-all duration-[800ms] ease-out delay-[300ms]
                          stagger-3 ${collageVisible ? '!opacity-100 !scale-100' : ''}`}
              style={{ clipPath: 'circle(50% at 50% 50%)' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Story