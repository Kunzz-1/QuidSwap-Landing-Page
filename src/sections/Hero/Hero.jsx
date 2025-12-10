import './Hero.css'

function Hero() {
  return (
    <section className="hero" id="hero">
      <video className="hero-video" autoPlay loop muted playsInline preload="auto">
        <source src="/HERO1.mp4" type="video/mp4" />
      </video>
      <div className="container hero-inner">
        <div className="hero-grid">
          <div className="hero-left">
            <h1 className="hero-title text-[48px] md:text-[80.1px]">
              <span className="line">SAY WHATSUP</span>
              <span className="line">TO CRYPTO</span>
              <span className="line">WITH QUIDSWAP</span>
            </h1>
            <div className="hero-actions">
              <a className="cta neon wa" href="#whatsapp">Hey! whatsup</a>
            </div>
          </div>
          <div className="hero-right">
            <p className="hero-sub">CHAT ➡ SEND ➡ SWAP ➡ RECIVE.<br/>No App Needed <br/> Just Whatsapp</p>
            <div className="notif-cards" aria-hidden="true">
              <div className='first'>
              <div className="notif">
                <div className="icon">S</div>
                <div>
                  <div className="title">💜 Deposit Received!</div>
                  <div className="meta">32m ago</div>
                </div>
                <div className="amount">+1,680 USD</div>
              </div>
              </div>
              <div className='second'>
              <div className="notif">                
              <div className="icon netflix">N</div>
                <div>
                  <div className="title">💜 Withdrawal Received!</div>
                  <div className="meta">34m ago</div>
                </div>
                <div className="amount negative">2,436,000 NGN</div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          <span className="ticker-item">USDT</span>
          <span className="bullet">•</span>
          <span className="ticker-item">BTC</span>
          <span className="bullet">•</span>
          <span className="ticker-item">ETH</span>
          <span className="bullet">•</span>
          <span className="ticker-item">QDX</span>
          <span className="bullet">•</span>
          <span className="ticker-item">USDC</span>
          <span className="bullet">•</span>
          <span className="ticker-item">USDT</span>
          <span className="bullet">•</span>
          <span className="ticker-item">BTC</span>
          <span className="bullet">•</span>
          <span className="ticker-item">ETH</span>
          <span className="bullet">•</span>
          <span className="ticker-item">QDX</span>
          <span className="bullet">•</span>
          <span className="ticker-item">USDC</span>
          <span className="bullet">•</span>
          {/* duplicate sequence for seamless loop */}
          <span className="ticker-item" aria-hidden="true">USDT</span>
          <span className="bullet" aria-hidden="true">•</span>
          <span className="ticker-item" aria-hidden="true">BTC</span>
          <span className="bullet" aria-hidden="true">•</span>
          <span className="ticker-item" aria-hidden="true">ETH</span>
          <span className="bullet" aria-hidden="true">•</span>
          <span className="ticker-item" aria-hidden="true">QDX</span>
          <span className="bullet" aria-hidden="true">•</span>
          <span className="ticker-item" aria-hidden="true">USDC</span>
          <span className="bullet" aria-hidden="true">•</span>
          <span className="ticker-item" aria-hidden="true">USDT</span>
          <span className="bullet" aria-hidden="true">•</span>
          <span className="ticker-item" aria-hidden="true">BTC</span>
          <span className="bullet" aria-hidden="true">•</span>
          <span className="ticker-item" aria-hidden="true">ETH</span>
          <span className="bullet" aria-hidden="true">•</span>
          <span className="ticker-item" aria-hidden="true">QDX</span>
          <span className="bullet" aria-hidden="true">•</span>
          <span className="ticker-item" aria-hidden="true">USDC</span>
          <span className="bullet" aria-hidden="true">•</span>
        </div>
      </div>
    </section>
  )
}

export default Hero