import { useScrollAnimation } from '../../hooks/useScrollAnimation'

function Testimonials() {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.2 })
  const [cardsRef, cardsVisible] = useScrollAnimation({ threshold: 0.1 })

  const testimonials = [
    {
      id: 1,
      text: 'Traveling with stablecoins and I was able to pay for Airbnb in Doha with my card.',
      name: 'Nwankwo',
      handle: '@judacodes',
      avatar: 'N',
      bgColor: 'bg-[#d7ff1f]',
      textColor: 'text-primary',
      handleColor: 'text-[#6b664f]',
      rotation: 'rotate-2',
      stagger: 'stagger-1'
    },
    {
      id: 2,
      text: 'Everyday, I find one new thing to love. Great UX, on-ramp and off-ramp, awesome.',
      name: 'Nkechi',
      handle: '@__iamcharis',
      avatar: 'Nk',
      bgColor: 'bg-[#8a5cff]',
      textColor: 'text-white',
      handleColor: 'text-white/70',
      rotation: '-rotate-2',
      stagger: 'stagger-2'
    },
    {
      id: 3,
      text: 'More economic choice for more people in more countries. Excited to play a small role.',
      name: 'Zach',
      handle: '@zcobrams',
      avatar: 'Z',
      bgColor: 'bg-[#FDFCF8]',
      textColor: 'text-primary',
      handleColor: 'text-[#6b664f]',
      rotation: 'rotate-2',
      stagger: 'stagger-3'
    },
    {
      id: 4,
      text: 'I made an exchange from base eth to local bank within 30secs. Incredible!',
      name: 'Muhammad',
      handle: '@DNuxAMB',
      avatar: 'M',
      bgColor: 'bg-[#ff8a1f]',
      textColor: 'text-[#1b1005]',
      handleColor: 'text-[#1b1005]/70',
      rotation: '-rotate-2',
      stagger: 'stagger-4'
    }
  ]

  const baseCardClasses = 'rounded-2xl p-4 sm:p-5 border border-slate-500/30 shadow-[0_20px_40px_rgba(0,0,0,0.08)] flex flex-col min-h-0 fade-in-up transition-all duration-[4000ms] hover:scale-105 hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(0,0,0,0.15)] cursor-pointer'

  return (
    <section id="testimonials" className="bg-[#FDFCF8] text-primary py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div ref={titleRef} className={`fade-in-up ${titleVisible ? 'visible' : ''} text-center mb-6 sm:mb-8`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[36px] font-bold mb-2 sm:mb-4 leading-tight">
            What our community is saying
          </h2>
        </div>
        
        <div 
          ref={cardsRef} 
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 mt-6 sm:mt-8 ${cardsVisible ? 'visible' : ''}`}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`${baseCardClasses} ${testimonial.bgColor} ${testimonial.textColor} ${testimonial.rotation} ${testimonial.stagger} ${cardsVisible ? 'visible' : ''}`}
              style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)' }}
            >
              <div className="font-semibold text-sm sm:text-base md:text-lg leading-relaxed mb-3 sm:mb-4 flex-grow break-words">
                {testimonial.text}
              </div>
              <div className="flex items-center gap-2.5 sm:gap-3 mt-auto">
                <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-primary text-white flex items-center justify-center font-extrabold text-xs sm:text-sm md:text-base flex-shrink-0">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-bold text-sm sm:text-base">{testimonial.name}</div>
                  <div className={`${testimonial.handleColor} text-xs sm:text-sm`}>
                    {testimonial.handle}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials