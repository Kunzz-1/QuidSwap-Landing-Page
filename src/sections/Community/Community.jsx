import './Community.css'

function Community() {
  return (
    <section className="community" id="community">
      <div className="container community-inner grid grid-cols-1 lg:grid-cols-[1fr_1.2fr_1fr]">
        <div className="avatar-stack left grid grid-cols-4 lg:grid-cols-2" aria-hidden="true">
          <span className="avatar-circle" style={{backgroundImage: `url("/10.png")`}} />
          <span className="avatar-circle" style={{backgroundImage: `url("/2.jpg")`}} />
          <span className="avatar-circle" style={{backgroundImage: `url("/1.jpg")`}} />
          <span className="avatar-circle" style={{backgroundImage: `url("/7.png")`}} />
        </div>
        <div className="community-copy">
          <h2 className="section-title center">Built with trust<br/> Powered by Quidax</h2>
          <p className="section-sub center">Join people exchanging confidently every day on WhatsApp.</p>
          {/* <div className="actions center"><a href="#whatsapp" className="cta neon wa">Start on WhatsApp</a></div> */}
        </div>
        <div className="avatar-stack right grid grid-cols-4 lg:grid-cols-2" aria-hidden="true">
          <span className="avatar-circle" style={{backgroundImage: `url("/9.png")`}} />
          <span className="avatar-circle" style={{backgroundImage: `url("/6.png")`}} />
          <span className="avatar-circle" style={{backgroundImage: `url("/3.jpg")`}} />
          <span className="avatar-circle" style={{backgroundImage: `url("/12.jpg")`}} />
        </div>
      </div>
    </section>
  )
}

export default Community