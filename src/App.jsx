import './App.css'
import './styles/base.css'
import Header from './layout/Header'
import Footer from './layout/Footer'
import Hero from './sections/Hero/Hero'
import Story from './sections/Story/Story'
import Hub from './sections/Hub/Hub'
import Account from './sections/Account/Account'
import Testimonials from './sections/Testimonials/Testimonials'
import How from './sections/How/How'
import FAQ from './sections/FAQ/FAQ'
import AboutUs from './sections/AboutUs/AboutUs'
import Community from './sections/Community/Community'

function App() {
  return (
    <div className="page">
      <Header />

      <main>
        <Hero />

        <Story />

        <Hub />

        <Account />
        

        <How />

        <Community />
        <Testimonials />

        <FAQ />

        <AboutUs />

      </main>

      <Footer />
    </div>
  )
}

export default App
