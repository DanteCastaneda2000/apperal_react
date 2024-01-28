import {
  HeaderMobile, HeaderDesktop, HeroMobile, HeroDesktop, Title, Form, ErrorMessage, ErrorValidation
} from './sections';

const App = () => {
  const isErrorVisible = ErrorValidation();
  return (
  <article className="bg-gradient-mobile w-screen h-screen desktop:bg-pattern-desktop desktop:bg-gradient-desktop desktop:flex desktop:flex-row desktop:justify-between">
    <HeaderMobile/>
    <main className="mx-8 mb-8 flex flex-col justify-center items-center text-center desktop:mt-[4.375rem] desktop:ml-[10.3125rem] desktop:text-left desktop:flex desktop:justify-start desktop:items-start">
    <HeaderDesktop/>
    <HeroMobile/>
    <Title/>
    <Form/>
    {isErrorVisible && <ErrorMessage />}
    </main>
    <HeroDesktop/>
  </article>);
}
export default App;
