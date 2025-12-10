import './How.css'

function How() {
  return (
    <section className="how" id="how">
      <div className="container how-inner grid grid-cols-1 lg:grid-cols-2">
        <div className="how-copy">
          <div className="pill">Get started</div>
          <h3>How to use QuidSwap</h3>
          <ol className="how-list">
            <li className="how-item"><span className="num">01</span> Open WhatsApp and message QuidSwap</li>
            <li className="how-item"><span className="num">02</span> Confirm rates, share payout details</li>
            <li className="how-item"><span className="num">03</span> Swap crypto and receive NGN instantly</li>
          </ol>
        </div>
        <div className="how-media" aria-hidden="true">
          <img src="/ht.png" alt="" />
        </div>
      </div>
    </section>
  )
}

export default How