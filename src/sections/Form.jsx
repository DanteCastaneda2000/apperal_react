import iconArrow from "../assets/icon-arrow.svg"
import ErrorValidation from "./ErrorValidation";
import ErrorIcon from "./ErrorIcon";

const Form = () => {
  const isErrorVisible = ErrorValidation();
  return (
    <fieldset className={`overflow-hidden min-w-[19.4375rem] min-h-[3rem] mx-8 mt-8 mb-4 p-0 rounded-[1.75rem] flex flex-row justify-between items-center desktop:w-[27.8125rem] desktop:h-14 desktop:mb-6 desktop:mx-0 ${isErrorVisible ? 'border-[0.125rem] border-solid border-soft-red' : 'border-[0.0652rem] border-solid border-desaturated-red'}`}>
        <input id="substance-input"  className={`outline-0 bg-transparent text-left pl-6 w-2/3 text-md font-normal placeholder:text-desaturated-red placeholder:opacity-50`}
          type="email"
          placeholder="Email Address"
          required
        />
        {isErrorVisible && <ErrorIcon />}
        <button id="form-btn"  className="w-16 h-12 rounded-[1.75rem] bg-gradient-button flex justify-center items-center desktop:w-[6.5rem] desktop:h-14 rounded-[1.75rem] " type="submit">
          <img src={iconArrow} alt="arrow-icon" />
        </button>
      </fieldset>
  )
}

export default Form
