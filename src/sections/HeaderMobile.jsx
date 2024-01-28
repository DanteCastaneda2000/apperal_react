import logo from "../assets/logo.svg"

const HeaderMobile = () => (
  <header className="flex justify-start items-start m-8 desktop:hidden">
      <img className=" w-[6.25rem] h-[1.3125rem]" src={logo} alt="header-logo-mobile" />
  </header>
)

export default HeaderMobile