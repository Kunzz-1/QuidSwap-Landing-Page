import { useScrollAnimation } from '../../hooks/useScrollAnimation'

function How() {
  const [copyRef, copyVisible] = useScrollAnimation({ threshold: 0.2 })
  const [mediaRef, mediaVisible] = useScrollAnimation({ threshold: 0.2 })

  return (
    <section id="how" className="py-15 sm:py-20 md:py-24 lg:py-32">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-primary text-[#f8f6ee] border border-[#1e1e25] rounded-3xl sm:rounded-[28px] p-6 sm:p-8 md:p-10 max-w-[1000px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center overflow-hidden box-border">
          <div 
            ref={copyRef} 
            className={`fade-in-left ${copyVisible ? 'visible' : ''} order-2 lg:order-1`}
          >
            <div className="inline-block text-xs font-bold tracking-wide border border-[#24242c] text-[#cfcfc8] rounded-full px-2.5 sm:px-3 py-1.5 sm:py-2 mb-2 sm:mb-3">
              Get started
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[28px] font-bold mb-4 sm:mb-6 leading-tight mt-2 sm:mt-3">
              How to use QuidSwap
            </h3>
            <ol className="grid gap-3 sm:gap-4">
              <li className={`grid grid-cols-[32px_1fr] sm:grid-cols-[36px_1fr] md:grid-cols-[40px_1fr] items-center gap-3 sm:gap-4 bg-[#6100a5] border border-[#24242c] text-[#f8f6ee] px-3 sm:px-4 py-2.5 sm:py-3.5 rounded-xl text-sm sm:text-base md:text-lg leading-relaxed break-words stagger-1 ${copyVisible ? 'visible' : ''}`}>
                <span className="inline-grid place-items-center w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#22222b] text-[#cfcfc8] font-extrabold text-xs sm:text-sm md:text-base flex-shrink-0">01</span>
                Open WhatsApp and message QuidSwap
              </li>
              <li className={`grid grid-cols-[32px_1fr] sm:grid-cols-[36px_1fr] md:grid-cols-[40px_1fr] items-center gap-3 sm:gap-4 bg-[#6100a5] border border-[#24242c] text-[#f8f6ee] px-3 sm:px-4 py-2.5 sm:py-3.5 rounded-xl text-sm sm:text-base md:text-lg leading-relaxed break-words stagger-2 ${copyVisible ? 'visible' : ''}`}>
                <span className="inline-grid place-items-center w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#22222b] text-[#cfcfc8] font-extrabold text-xs sm:text-sm md:text-base flex-shrink-0">02</span>
                Confirm rates, share payout details
              </li>
              <li className={`grid grid-cols-[32px_1fr] sm:grid-cols-[36px_1fr] md:grid-cols-[40px_1fr] items-center gap-3 sm:gap-4 bg-[#6100a5] border border-[#24242c] text-[#f8f6ee] px-3 sm:px-4 py-2.5 sm:py-3.5 rounded-xl text-sm sm:text-base md:text-lg leading-relaxed break-words stagger-3 ${copyVisible ? 'visible' : ''}`}>
                <span className="inline-grid place-items-center w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#22222b] text-[#cfcfc8] font-extrabold text-xs sm:text-sm md:text-base flex-shrink-0">03</span>
                Swap crypto and receive NGN instantly
              </li>
            </ol>
          </div>
          
          <div 
            ref={mediaRef} 
            className={`fade-in-right ${mediaVisible ? 'visible' : ''} relative order-1 lg:order-2`}
            aria-hidden="true"
          >
            <img src="/ht.png" alt="How to use QuidSwap" className="w-full rounded-2xl object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default How