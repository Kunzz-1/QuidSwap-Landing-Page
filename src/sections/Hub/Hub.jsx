import './Hub.css'

function Hub() {
  return (
    <section className="hub" id="hub">
      <div className="container hub-inner">
        <div className="hub-copy">
          <div className="pill">All in one</div>
          <h3>One chat for swaps and instant payouts.</h3>
          <p>Move value across rails without leaving the chat. Instant payouts to your NGN account.</p>
        </div>
        <div className="hub-map" aria-hidden="true">
          <div className="map-col">
            <div className="map-item">Bitcoin</div>
            <div className="map-item">Ethereum</div>
            <div className="map-item">Qudax Token</div>
          </div>
          <div className="hub-core">●</div>
          <div className="map-col">
            <div className="map-item">USDT</div>
            <div className="map-item">USDC</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hub