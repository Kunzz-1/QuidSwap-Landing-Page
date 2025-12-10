import './Header.css'

function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#" className="brand">
          <img src="/logo1.png" alt="QuidSwap" className="brand-mark" />
        </a>
        <nav className="nav">
          <a href="#story">Exchange</a>
          <a href="#account">Payouts</a>
          <a href="#community">Community</a>
          <a href="#about-us">About Us</a>
        </nav>
      </div>
    </header>
  )
}

export default Header