import { useScrollAnimation } from '../../hooks/useScrollAnimation'

function AboutUs() {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.2 })
  const [contentRef, contentVisible] = useScrollAnimation({ threshold: 0.1 })

  return (
    <section 
      id="about-us" 
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-cover bg-center bg-fixed sm:bg-scroll"
      style={{ backgroundImage: 'url("/5.jpg")' }}
    >
      <div className="absolute inset-0 bg-black/62 z-0"></div>
      <div className="relative z-10 py-10 sm:py-12 md:py-16 text-center text-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div ref={titleRef} className={`fade-in-up ${titleVisible ? 'visible' : ''}`}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] mb-6 sm:mb-8 md:mb-10 uppercase tracking-wide leading-tight text-primary">
              Our Story
            </h2>
          </div>
          <div ref={contentRef} className="max-w-3xl mx-auto">
            <p className={`text-base sm:text-lg md:text-xl leading-relaxed mb-4 sm:mb-5 md:mb-6 text-[#e0e0e0] fade-in-up stagger-1 ${contentVisible ? 'visible' : ''}`}>
              Welcome to QuidSwap, where innovation meets convenience in the world of digital finance. Founded on the principle of simplifying complex transactions, QuidSwap began with a vision to create a seamless and secure platform for exchanging digital assets.
            </p>
            <p className={`text-base sm:text-lg md:text-xl leading-relaxed mb-4 sm:mb-5 md:mb-6 text-[#e0e0e0] fade-in-up stagger-2 ${contentVisible ? 'visible' : ''}`}>
              Our journey started with a small team of passionate developers and financial experts who believed in the power of blockchain technology to transform everyday interactions. We saw a need for a user-friendly system that could bridge the gap between traditional banking and the burgeoning crypto market, all within the familiar environment of chat applications.
            </p>
            <p className={`text-base sm:text-lg md:text-xl leading-relaxed mb-0 text-[#e0e0e0] fade-in-up stagger-3 ${contentVisible ? 'visible' : ''}`}>
              Today, QuidSwap stands as a testament to that vision. We are committed to providing instant, secure, and accessible financial services to everyone, everywhere. Our platform is designed to empower individuals and businesses alike, offering a reliable way to manage and exchange digital currencies without the need for complex applications or lengthy processes. Join us as we continue to redefine the future of finance, one chat at a time.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs