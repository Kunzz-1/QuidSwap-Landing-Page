import './FAQ.css'
import { useState } from 'react'

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)
  const toggle = (idx) => setOpenIndex((prev) => (prev === idx ? null : idx))
  return (
    <section className="faq" id="faq">
      <div className="container faq-inner">
        <div className="faq-left">
          <h2>Frequently<br/>Asked Questions</h2>
        </div>
        <div className="faq-right">
          <details className="faq-item" open={openIndex === 0}>
            <summary onClick={(e) => { e.preventDefault(); toggle(0) }}><span>What is QuidSwap?</span><span className="plus">+</span></summary>
            <div className="faq-content">A WhatsApp exchange that converts crypto to NGN instantly with verified payouts.</div>
          </details>
          <details className="faq-item" open={openIndex === 1}>
            <summary onClick={(e) => { e.preventDefault(); toggle(1) }}><span>How fast are payouts?</span><span className="plus">+</span></summary>
            <div className="faq-content">Most swaps settle in minutes. NGN is sent immediately after confirmation.</div>
          </details>
          <details className="faq-item" open={openIndex === 2}>
            <summary onClick={(e) => { e.preventDefault(); toggle(2) }}><span>Is QuidSwap secure?</span><span className="plus">+</span></summary>
            <div className="faq-content">We use trusted rails, clear confirmations, and human support for every exchange.</div>
          </details>
        </div>
      </div>
    </section>
  )
}

export default FAQ