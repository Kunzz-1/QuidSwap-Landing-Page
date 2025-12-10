import './Story.css'

function Story() {
  return (
    <section className="story" id="story">
      <div className="container">
        <div className="story-grid">
          <div className="story-text">
            <h2>Exchange crypto like you message friends.</h2>
            <p>QuidSwap turns WhatsApp into your trusted exchange. Chat to convert, confirm in seconds, and get NGN instantly to your account.</p>
            <p>Clear rates, fast settlement, human support when you need it.</p>
          </div>
          <div className="story-collage" aria-hidden="true">
            <img src="/btc.jpg" alt="" />
            <img src="/qdx.jpg" alt="" />
            <img src="/usdt.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Story