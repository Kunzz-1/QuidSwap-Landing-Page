import { useScrollAnimation } from '../../hooks/useScrollAnimation'

function Account() {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.2 })
  const [imageRef, imageVisible] = useScrollAnimation({ threshold: 0.2 })
  const [phoneRef, phoneVisible] = useScrollAnimation({ threshold: 0.2 })

  return (
    <section id="account" className="bg-white text-primary py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div ref={titleRef} className={`fade-in-up ${titleVisible ? 'visible' : ''} text-center mb-8 sm:mb-12 md:mb-16`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[36px] font-bold mb-2 sm:mb-4 leading-tight">
            Instant NGN Payouts. Clear, Reliable.
          </h2>
          <p className="text-[#690878] text-sm sm:text-base md:text-lg mb-8 sm:mb-12 md:mb-32 leading-relaxed max-w-2xl mx-auto">
            Create payout details in seconds and receive NGN instantly after every swap.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-6 sm:gap-8 items-center">
          <div 
            ref={imageRef} 
            className={`fade-in-left ${imageVisible ? 'visible' : ''} relative rounded-2xl overflow-hidden order-2 lg:order-1`}
          >
            <img src="/13.jpg" alt="Account benefits" className="w-full h-auto object-cover" />
            <ul className="absolute left-2 sm:left-4 bottom-2 sm:bottom-4 grid gap-2 sm:gap-2.5 p-3 sm:p-4 rounded-xl backdrop-blur-sm bg-black/35 text-[#eaf0ff]">
              <li className={`flex items-center gap-2 sm:gap-2.5 text-xs sm:text-sm md:text-base whitespace-nowrap stagger-1 ${imageVisible ? 'visible' : ''}`}>
                <span className="inline-grid place-items-center w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full bg-wa text-[#09110b] font-extrabold text-[10px] sm:text-xs md:text-sm flex-shrink-0">✔</span>
                Instant NGN payouts
              </li>
              <li className={`flex items-center gap-2 sm:gap-2.5 text-xs sm:text-sm md:text-base whitespace-nowrap stagger-2 ${imageVisible ? 'visible' : ''}`}>
                <span className="inline-grid place-items-center w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full bg-wa text-[#09110b] font-extrabold text-[10px] sm:text-xs md:text-sm flex-shrink-0">✔</span>
                Verified bank routes
              </li>
              <li className={`flex items-center gap-2 sm:gap-2.5 text-xs sm:text-sm md:text-base whitespace-nowrap stagger-3 ${imageVisible ? 'visible' : ''}`}>
                <span className="inline-grid place-items-center w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full bg-wa text-[#09110b] font-extrabold text-[10px] sm:text-xs md:text-sm flex-shrink-0">✔</span>
                Transparent rates
              </li>
            </ul>
          </div>
          
          <div 
            ref={phoneRef} 
            className={`fade-in-right ${phoneVisible ? 'visible' : ''} relative flex items-center justify-center py-5 sm:py-8 order-1 lg:order-2`}
          >
            <div className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[440px] h-[240px] sm:h-[280px] md:h-[320px] lg:h-[360px] rounded-[20px] bg-white"></div>
            <div className="absolute w-[200px] sm:w-[220px] md:w-[240px] lg:w-[280px] h-[380px] sm:h-[420px] md:h-[460px] lg:h-[540px] rounded-[30px] sm:rounded-[35px] md:rounded-[40px] flex items-center justify-center shadow-[0_20px_40px_rgba(205,64,244,0.955)]">
              <div className="w-[86%] h-[86%] rounded-3xl bg-white p-4 sm:p-5 grid gap-3 sm:gap-4">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-[28px] font-extrabold">$5.97</div>
                <div className="grid gap-2 sm:gap-3 text-primary">
                  <div className={`flex justify-between items-center text-xs sm:text-sm md:text-base gap-2 stagger-1 ${phoneVisible ? 'visible' : ''}`}>
                    <span className="break-words">Stanley Moses</span>
                    <span className="text-[#0b7a2a] font-bold whitespace-nowrap flex-shrink-0">+1.09 USD</span>
                  </div>
                  <div className={`flex justify-between items-center text-xs sm:text-sm md:text-base gap-2 stagger-2 ${phoneVisible ? 'visible' : ''}`}>
                    <span className="break-words">Home LLC</span>
                    <span className="text-[#a31515] font-bold whitespace-nowrap flex-shrink-0">-6.00 USD</span>
                  </div>
                  <div className={`flex justify-between items-center text-xs sm:text-sm md:text-base gap-2 stagger-3 ${phoneVisible ? 'visible' : ''}`}>
                    <span className="break-words">Deposit</span>
                    <span className="text-[#0b7a2a] font-bold whitespace-nowrap flex-shrink-0">+4.00 USD</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Account