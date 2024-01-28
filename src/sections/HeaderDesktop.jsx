import logo from "../assets/logo.svg"

const HeaderDesktop = () => (
  <header className="hidden desktop:block desktop:mb-[6rem]">
      <img className="desktop:w-[9.875rem] desktop:h-[2.0625rem]" src={logo} alt="header-logo-desktop" />
  </header>
)

export default HeaderDesktop
