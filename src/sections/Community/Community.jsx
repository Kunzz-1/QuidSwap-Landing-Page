import { useScrollAnimation } from '../../hooks/useScrollAnimation'

function Community() {
  const [leftAvatarsRef, leftAvatarsVisible] = useScrollAnimation({ threshold: 0.2 })
  const [copyRef, copyVisible] = useScrollAnimation({ threshold: 0.2 })
  const [rightAvatarsRef, rightAvatarsVisible] = useScrollAnimation({ threshold: 0.2 })

  return (
    <section id="community" className="bg-white text-primary py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr_1fr] gap-5 sm:gap-6 items-center">
          <div 
            ref={leftAvatarsRef} 
            className={`fade-in-left ${leftAvatarsVisible ? 'visible' : ''} grid grid-cols-4 lg:grid-cols-2 gap-3 sm:gap-4 justify-items-center order-1 lg:order-1`}
            aria-hidden="true"
          >
            <span 
              className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-[120px] lg:h-[120px] rounded-full bg-cover bg-center shadow-[0_12px_28px_rgba(172,113,227,0.25)] object-cover stagger-1 ${leftAvatarsVisible ? 'visible' : ''}`}
              style={{backgroundImage: `url("/10.png")`}}
            />
            <span 
              className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-[120px] lg:h-[120px] rounded-full bg-cover bg-center shadow-[0_12px_28px_rgba(172,113,227,0.25)] object-cover stagger-2 ${leftAvatarsVisible ? 'visible' : ''}`}
              style={{backgroundImage: `url("/2.jpg")`}}
            />
            <span 
              className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-[120px] lg:h-[120px] rounded-full bg-cover bg-center shadow-[0_12px_28px_rgba(172,113,227,0.25)] object-cover stagger-3 ${leftAvatarsVisible ? 'visible' : ''}`}
              style={{backgroundImage: `url("/1.jpg")`}}
            />
            <span 
              className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-[120px] lg:h-[120px] rounded-full bg-cover bg-center shadow-[0_12px_28px_rgba(172,113,227,0.25)] object-cover stagger-4 ${leftAvatarsVisible ? 'visible' : ''}`}
              style={{backgroundImage: `url("/7.png")`}}
            />
          </div>
          
          <div 
            ref={copyRef} 
            className={`scale-in ${copyVisible ? 'visible' : ''} text-center order-2 lg:order-2`}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[36px] font-bold mb-2 sm:mb-4 leading-tight">
              Built with trust<br/> Powered by Quidax
            </h2>
            <p className="text-[#6b664f] text-sm sm:text-base md:text-lg leading-relaxed">
              Join people exchanging confidently every day on WhatsApp.
            </p>
          </div>
          
          <div 
            ref={rightAvatarsRef} 
            className={`fade-in-right ${rightAvatarsVisible ? 'visible' : ''} grid grid-cols-4 lg:grid-cols-2 gap-3 sm:gap-4 justify-items-center order-3 lg:order-3`}
            aria-hidden="true"
          >
            <span 
              className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-[120px] lg:h-[120px] rounded-full bg-cover bg-center shadow-[0_12px_28px_rgba(172,113,227,0.25)] object-cover stagger-1 ${rightAvatarsVisible ? 'visible' : ''}`}
              style={{backgroundImage: `url("/9.png")`}}
            />
            <span 
              className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-[120px] lg:h-[120px] rounded-full bg-cover bg-center shadow-[0_12px_28px_rgba(172,113,227,0.25)] object-cover stagger-2 ${rightAvatarsVisible ? 'visible' : ''}`}
              style={{backgroundImage: `url("/6.png")`}}
            />
            <span 
              className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-[120px] lg:h-[120px] rounded-full bg-cover bg-center shadow-[0_12px_28px_rgba(172,113,227,0.25)] object-cover stagger-3 ${rightAvatarsVisible ? 'visible' : ''}`}
              style={{backgroundImage: `url("/3.jpg")`}}
            />
            <span 
              className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-[120px] lg:h-[120px] rounded-full bg-cover bg-center shadow-[0_12px_28px_rgba(172,113,227,0.25)] object-cover stagger-4 ${rightAvatarsVisible ? 'visible' : ''}`}
              style={{backgroundImage: `url("/12.jpg")`}}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Community