import './AboutUs.css'

function AboutUs() {
  return (
    <section className="about-us py-[80px] md:py-[60px]" id="about-us">
      <div className="about-us-overlay py-[40px] md:py-[30px]">
        <div className="container">
          <h2 className="about-us-title text-[48px] md:text-[36px] mb-[30px] md:mb-[20px]">Our Story</h2>
          <p className="text-[1.2em] leading-[1.8] mb-[20px] md:text-[1em] md:leading-[1.6] md:mb-[15px]">Welcome to QuidSwap, where innovation meets convenience in the world of digital finance. Founded on the principle of simplifying complex transactions, QuidSwap began with a vision to create a seamless and secure platform for exchanging digital assets.</p>
          <p className="text-[1.2em] leading-[1.8] mb-[20px] md:text-[1em] md:leading-[1.6] md:mb-[15px]">Our journey started with a small team of passionate developers and financial experts who believed in the power of blockchain technology to transform everyday interactions. We saw a need for a user-friendly system that could bridge the gap between traditional banking and the burgeoning crypto market, all within the familiar environment of chat applications.</p>
          <p className="text-[1.2em] leading-[1.8] mb-[20px] md:text-[1em] md:leading-[1.6] md:mb-[15px]">Today, QuidSwap stands as a testament to that vision. We are committed to providing instant, secure, and accessible financial services to everyone, everywhere. Our platform is designed to empower individuals and businesses alike, offering a reliable way to manage and exchange digital currencies without the need for complex applications or lengthy processes. Join us as we continue to redefine the future of finance, one chat at a time.</p>
        </div>
      </div>
    </section>
  )
}

export default AboutUs