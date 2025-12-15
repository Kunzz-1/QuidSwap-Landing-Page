import { useScrollAnimation } from '../../hooks/useScrollAnimation'

function Hero() {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.3, once: true })
  const [subRef, subVisible] = useScrollAnimation({ threshold: 0.3, once: true })
  const [notifRef, notifVisible] = useScrollAnimation({ threshold: 0.2, once: true })

  return (
    <section 
      id="hero" 
      className="relative flex flex-col min-h-screen overflow-hidden text-white pt-16 md:pt-0"
    >
      {/* Video Background */}
      <video 
        className="absolute inset-0 w-full h-full object-cover object-center z-0" 
        autoPlay 
        loop 
        muted 
        playsInline 
        preload="auto"
      >
        <source src="/HERO1.mp4" type="video/mp4" />
      </video>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/20 to-black/40 z-[1] pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-[2] flex-1 flex items-center justify-center py-20 sm:py-24 md:py-32 lg:py-40">
        <div className="max-w-container-lg mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-4 md:gap-6 items-start w-full max-w-full">
            {/* Left Column */}
            <div className="flex flex-col items-start md:items-start lg:items-start justify-center text-center md:text-left w-full">
              <h1 
                ref={titleRef} 
                className={`text-[32px] sm:text-[40px] md:text-[56px] lg:text-[72px] xl:text-[88px] leading-[0.88] uppercase font-black text-[#f8f7f8] tracking-[-0.02em] mb-0 w-full fade-in-up ${titleVisible ? 'visible' : ''}`}
                style={{ textShadow: '0 4px 14px rgba(0, 0, 0, 0.55)' }}
              >
                <span className={`block stagger-1 ${titleVisible ? 'visible' : ''}`}>SAY WHATSUP</span>
                <span className={`block stagger-2 ${titleVisible ? 'visible' : ''}`}>TO CRYPTO</span>
                <span className={`block stagger-3 ${titleVisible ? 'visible' : ''}`}>WITH QUIDSWAP</span>
            </h1>
              <div className={`mt-6 md:mt-8 flex justify-center md:justify-start w-full fade-in-up stagger-4 ${titleVisible ? 'visible' : ''}`}>
                <a 
                  href="#whatsapp" 
                  className="inline-flex items-center justify-center px-5 sm:px-6 md:px-7 py-3 sm:py-4 md:py-[18px] bg-wa text-[#09110b] rounded-full font-extrabold text-base sm:text-lg md:text-xl shadow-[0_10px_24px_rgba(48,131,20,0.35)] whitespace-nowrap transition-all hover:scale-105"
                >
                  Hey! whatsup
                </a>
              </div>
            </div>
            
            {/* Right Column */}
            <div className="relative pt-0 md:pt-9 flex flex-col items-center md:items-start w-full">
              <p 
                ref={subRef} 
                className={`text-base sm:text-lg md:text-xl text-[#e9eef7] max-w-full md:max-w-[480px] leading-relaxed mb-6 md:mb-0 fade-in-right ${subVisible ? 'visible' : ''}`}
              >
                CHAT ➡ SEND ➡ SWAP ➡ RECIVE.<br/>No App Needed <br/> Just Whatsapp
              </p>
              
              {/* Notification Cards */}
              <div 
                ref={notifRef} 
                className={`mt-6 md:mt-0 md:absolute md:top-[calc(100%+68px)] flex flex-col gap-3 md:gap-4 w-full md:w-auto ${notifVisible ? 'visible' : ''}`}
                aria-hidden="true"
              >
                <div className={`fade-in-up stagger-1 ${notifVisible ? 'visible' : ''} mt-0 md:mt-8 md:ml-20`}>
                  <div className="grid grid-cols-[32px_1fr_auto] sm:grid-cols-[36px_1fr_auto] md:grid-cols-[40px_1fr_auto] items-center gap-2 sm:gap-3 p-3 sm:p-3.5 md:p-4 bg-white text-primary rounded-2xl shadow-[0_12px_28px_rgba(0,0,0,0.18)] min-w-[280px] sm:min-w-[300px] md:min-w-[340px] max-w-full">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-xl bg-[#6b46ff] text-white flex items-center justify-center font-bold text-xs sm:text-sm md:text-sm flex-shrink-0">S</div>
                    <div className="min-w-0">
                      <div className="font-bold text-sm sm:text-[15px] leading-snug break-words">💜 Deposit Received!</div>
                      <div className="text-muted text-xs leading-tight">32m ago</div>
                    </div>
                    <div className="font-bold text-[#0b7a2a] text-sm sm:text-[15px] whitespace-nowrap flex-shrink-0">+1,680 USD</div>
          </div>
                </div>
                
                <div className={`fade-in-up stagger-2 ${notifVisible ? 'visible' : ''} md:-ml-16 md:mr-24`}>
                  <div className="grid grid-cols-[32px_1fr_auto] sm:grid-cols-[36px_1fr_auto] md:grid-cols-[40px_1fr_auto] items-center gap-2 sm:gap-3 p-3 sm:p-3.5 md:p-4 bg-white text-primary rounded-2xl shadow-[0_12px_28px_rgba(0,0,0,0.18)] min-w-[280px] sm:min-w-[300px] md:min-w-[340px] max-w-full">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-xl bg-black text-white flex items-center justify-center font-bold text-xs sm:text-sm md:text-sm flex-shrink-0">N</div>
                    <div className="min-w-0">
                      <div className="font-bold text-sm sm:text-[15px] leading-snug break-words">💜 Withdrawal Received!</div>
                      <div className="text-muted text-xs leading-tight">34m ago</div>
              </div>
                    <div className="font-bold text-[#a31515] text-sm sm:text-[15px] whitespace-nowrap flex-shrink-0">2,436,000 NGN</div>
              </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Ticker */}
      <div className="absolute bottom-0 left-0 right-0 bg-primary text-[#09110b] border-t border-b border-primary/50 py-3 overflow-hidden z-[2]">
        <div className="inline-flex gap-6 sm:gap-8 md:gap-10 lg:gap-12 py-0.5 whitespace-nowrap animate-ticker">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="flex items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12">
              <span className="font-extrabold text-xs sm:text-sm md:text-base tracking-wide">USDT</span>
              <span className="font-black text-[#09110b]">•</span>
              <span className="font-extrabold text-xs sm:text-sm md:text-base tracking-wide">BTC</span>
              <span className="font-black text-[#09110b]">•</span>
              <span className="font-extrabold text-xs sm:text-sm md:text-base tracking-wide">ETH</span>
              <span className="font-black text-[#09110b]">•</span>
              <span className="font-extrabold text-xs sm:text-sm md:text-base tracking-wide">QDX</span>
              <span className="font-black text-[#09110b]">•</span>
              <span className="font-extrabold text-xs sm:text-sm md:text-base tracking-wide">USDC</span>
              <span className="font-black text-[#09110b]">•</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero