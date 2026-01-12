import { useScrollAnimation } from '../../hooks/useScrollAnimation'

function Hub() {
  const [copyRef, copyVisible] = useScrollAnimation({ threshold: 0.2 })
  const [mapRef, mapVisible] = useScrollAnimation({ threshold: 0.2 })

  return (
    <section id="hub" className="py-10 sm:py-12 md:py-16 lg:py-20 overflow-x-hidden">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-primary text-[#f8f6ee] border border-white/25 rounded-3xl sm:rounded-[28px] p-10 sm:p-8 md:p-10 max-w-[900px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 shadow-[0_20px_40px_rgba(0,0,0,0.08)] overflow-hidden box-border">
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
            className={`scale-in ${mapVisible ? 'visible' : ''} min-w-0 overflow-hidden pb-1 -mb-54`}
            aria-hidden="true"
          >
            <img src="/bar.png" alt="Crypto to NGN conversion options" className="w-full h-auto object-contain scale-130" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hub