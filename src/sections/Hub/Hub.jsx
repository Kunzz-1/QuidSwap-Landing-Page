import { useScrollAnimation } from '../../hooks/useScrollAnimation'

function Hub() {
  const [copyRef, copyVisible] = useScrollAnimation({ threshold: 0.2 })
  const [mapRef, mapVisible] = useScrollAnimation({ threshold: 0.2 })

  return (
    <section id="hub" className="py-10 sm:py-12 md:py-16 lg:py-20 overflow-x-hidden">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-primary text-[#f8f6ee] border border-white/25 rounded-3xl sm:rounded-[28px] p-6 sm:p-8 md:p-10 max-w-[1000px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 shadow-[0_20px_40px_rgba(0,0,0,0.08)] overflow-hidden box-border">
          <div 
            ref={copyRef} 
            className={`fade-in-up ${copyVisible ? 'visible' : ''} min-w-0 overflow-hidden`}
          >
            <div className="inline-block text-xs font-bold tracking-wide border border-[#2a2a33] text-[#cfcfc8] rounded-full px-2.5 sm:px-3 py-1.5 sm:py-2 mb-2 sm:mb-3">
              All in one
        </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[28px] font-bold mb-3 sm:mb-4 leading-tight mt-2 sm:mt-3">
              One chat for swaps and instant payouts.
            </h3>
            <p className="text-[#cfcfc8] text-sm sm:text-base md:text-lg mb-4 sm:mb-6 max-w-full lg:max-w-[460px] leading-relaxed break-words">
              Move value across rails without leaving the chat. Instant payouts to your NGN account.
            </p>
          </div>
          
          <div 
            ref={mapRef} 
            className={`scale-in ${mapVisible ? 'visible' : ''} grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-4 sm:gap-6 md:gap-5 lg:gap-6 min-w-0 overflow-hidden`}
            aria-hidden="true"
          >
            <div className="grid gap-3 sm:gap-4 min-w-0 overflow-hidden order-2 md:order-1">
              <div className={`bg-[#5a2fe0] border border-white/20 text-[#f8f6ee] px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl text-center font-bold text-sm sm:text-base break-words leading-snug stagger-1 ${mapVisible ? 'visible' : ''}`}>
                Bitcoin
              </div>
              <div className={`bg-[#5a2fe0] border border-white/20 text-[#f8f6ee] px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl text-center font-bold text-sm sm:text-base break-words leading-snug stagger-2 ${mapVisible ? 'visible' : ''}`}>
                Ethereum
              </div>
              <div className={`bg-[#5a2fe0] border border-white/20 text-[#f8f6ee] px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl text-center font-bold text-sm sm:text-base break-words leading-snug stagger-3 ${mapVisible ? 'visible' : ''}`}>
                Qudax Token
              </div>
            </div>
            
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-[70px] lg:h-[70px] rounded-2xl bg-wa text-[#1b1005] flex items-center justify-center font-black text-xl sm:text-2xl md:text-3xl lg:text-[28px] shadow-[0_14px_28px_rgba(0,0,0,0.12)] border-2 border-white/35 flex-shrink-0 order-1 md:order-2 scale-in-bounce mx-auto md:mx-0">
              ●
            </div>
            
            <div className="grid gap-3 sm:gap-4 min-w-0 overflow-hidden order-3">
              <div className={`bg-[#5a2fe0] border border-white/20 text-[#f8f6ee] px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl text-center font-bold text-sm sm:text-base break-words leading-snug stagger-4 ${mapVisible ? 'visible' : ''}`}>
                USDT
              </div>
              <div className={`bg-[#5a2fe0] border border-white/20 text-[#f8f6ee] px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl text-center font-bold text-sm sm:text-base break-words leading-snug stagger-5 ${mapVisible ? 'visible' : ''}`}>
                USDC
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hub