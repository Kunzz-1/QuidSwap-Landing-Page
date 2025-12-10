import './Testimonials.css'

function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <h2 className="section-title center">What our community is saying</h2>
        <div className="t-row">
          <div className="t-card lime">
            <div className="t-body">
              Traveling with stablecoins and I was able to pay for Airbnb in Doha with my card.
            </div>
            <div className="t-footer">
              <div className="avatar">N</div>
              <div>
                <div className="name">Nwankwo</div>
                <div className="handle">@judacodes</div>
              </div>
            </div>
          </div>
          <div className="t-card purple">
            <div className="t-body">
              Everyday, I find one new thing to love. Great UX, on-ramp and off-ramp, awesome.
            </div>
            <div className="t-footer">
              <div className="avatar">Nk</div>
              <div>
                <div className="name">Nkechi</div>
                <div className="handle">@__iamcharis</div>
              </div>
            </div>
          </div>
          <div className="t-card light">
            <div className="t-body">
              More economic choice for more people in more countries. Excited to play a small role.
            </div>
            <div className="t-footer">
              <div className="avatar">Z</div>
              <div>
                <div className="name">Zach</div>
                <div className="handle">@zcobrams</div>
              </div>
            </div>
          </div>
          <div className="t-card orange">
            <div className="t-body">
              I made an exchange from base eth to local bank within 30secs. Incredible!
            </div>
            <div className="t-footer">
              <div className="avatar">M</div>
              <div>
                <div className="name">Muhammad</div>
                <div className="handle">@DNuxAMB</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials