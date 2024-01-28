import heroDesktop from "../assets/hero-desktop.jpg"

const HeroDesktop = () => (
  <section className="hidden desktop:block">
    <div>
      <img className="desktop:mac-w-[38.125rem] desktop:h-screen" src={heroDesktop} alt="hero-desktop" />
    </div>
  </section>
)

export default HeroDesktop
