import heroMobile from "../assets/hero-mobile.jpg"

const HeroMobile = () => (
  <section className="mb-16 desktop:hidden">
    <div>
      <img className="min-w-[23.438rem] min-h-[15.625rem]" src={heroMobile} alt="hero-mobile" />
    </div>
  </section>
)

export default HeroMobile
