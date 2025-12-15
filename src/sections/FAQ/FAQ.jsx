import { useState } from 'react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)
  const toggle = (idx) => setOpenIndex((prev) => (prev === idx ? null : idx))
  const [leftRef, leftVisible] = useScrollAnimation({ threshold: 0.2 })
  const [rightRef, rightVisible] = useScrollAnimation({ threshold: 0.2 })

  const faqs = [
    {
      question: 'What is QuidSwap?',
      answer: 'A WhatsApp exchange that converts crypto to NGN instantly with verified payouts.'
    },
    {
      question: 'How fast are payouts?',
      answer: 'Most swaps settle in minutes. NGN is sent immediately after confirmation.'
    },
    {
      question: 'Is QuidSwap secure?',
      answer: 'We use trusted rails, clear confirmations, and human support for every exchange.'
    }
  ]

  return (
    <section id="faq" className="bg-[#fefefe] py-12 sm:py-16 md:py-20">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-primary text-white border border-white/25 rounded-3xl sm:rounded-[20px] p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-[0.6fr_1fr] gap-6 sm:gap-8 overflow-hidden box-border">
          <div 
            ref={leftRef} 
            className={`fade-in-left ${leftVisible ? 'visible' : ''}`}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[32px] font-bold mb-0 leading-tight">
              Frequently<br/>Asked Questions
            </h2>
          </div>
          
          <div 
            ref={rightRef} 
            className={`fade-in-right ${rightVisible ? 'visible' : ''} space-y-0`}
          >
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`border-b border-white/25 last:border-0 overflow-hidden transition-all duration-500 ease-in-out ${rightVisible ? 'visible' : ''}`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full list-none cursor-pointer grid grid-cols-[1fr_auto] items-center py-4 sm:py-5 font-bold text-sm sm:text-base md:text-lg gap-3 transition-all duration-500 ease-in-out hover:opacity-90 text-left"
                >
                  <span className="text-left">{faq.question}</span>
                  <span 
                    className={`inline-grid place-items-center w-5 h-5 sm:w-6 sm:h-6 rounded-md bg-white/20 text-[#cfcfc8] font-black text-sm sm:text-base transition-all duration-500 ease-in-out flex-shrink-0 ${openIndex === idx ? 'rotate-45 bg-white/30' : ''}`}
                  >
                    +
                  </span>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === idx 
                      ? 'max-h-96 opacity-100 pb-4 sm:pb-5' 
                      : 'max-h-0 opacity-0 pb-0'
                  }`}
                >
                  <div className="text-[#f4f4f1] text-sm sm:text-base leading-relaxed break-words">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ