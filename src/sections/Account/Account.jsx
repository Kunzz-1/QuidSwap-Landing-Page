import './Account.css'

function Account() {
  return (
    <section className="account" id="account">
      <div className="container">
        <h2 className="section-title center">Instant NGN Payouts. Clear, Reliable.</h2>
        <p className="section-sub center">Create payout details in seconds and receive NGN instantly after every swap.</p>
        <div className="account-grid grid grid-cols-1 lg:grid-cols-[1fr_0.9fr]">
          <div className="account-image">
            <img src="/13.jpg" alt="" />
            <ul className="benefits">
              <li><span className="check">✔</span> Instant NGN payouts</li>
              <li><span className="check">✔</span> Verified bank routes</li>
              <li><span className="check">✔</span> Transparent rates</li>
            </ul>
          </div>
          <div className="phone-wrap">
            <div className="phone-bg"></div>
            <div className="phone">
              <div className="phone-screen">
                <div className="balance">$5.97</div>
                <div className="tx-list">
                  <div className="tx">Stanley Moses <span className="pos">+1.09 USD</span></div>
                  <div className="tx">Home LLC <span className="neg">-6.00 USD</span></div>
                  <div className="tx">Deposit <span className="pos">+4.00 USD</span></div>
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