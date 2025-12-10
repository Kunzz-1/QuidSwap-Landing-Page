import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-contact">
          <p>Contact QuidSwap at:</p>
          <a href="mailto:quidswap@quidax.com" className="footer-email">quidswap@quidax.com <span className="arrow">↗</span></a>
        </div>
        
        <nav className="footer-nav">
          <a href="#hero">Home</a>
          <a href="#story">Story</a>
          <a href="#account">Account</a>
          <a href="#community">Community</a>
          <a href="#about-us">About Us</a>
        </nav>
        <div className="footer-logo">
          <img src="/logo1.png" alt="QuidSwap" />
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} QuidSwap. All rights reserved.</span>
          {/* <div className="footer-social">
            <a href="#">Linkedin</a>
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
          </div> */}
        </div>
      </div>
    </footer>
  )
}

export default Footer