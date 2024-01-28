import { useState, useEffect } from 'react';

const ErrorValidation = () => {
  const [isErrorVisible, setIsErrorVisible] = useState(false);

  useEffect(() => {
    console.clear();
    var substanceInput = document.querySelector(`#substance-input`);
    var formBtn = document.querySelector(`#form-btn`);
    
    formBtn.addEventListener(`click`, ()=> {
      if (substanceInput.validity.valid) {
        console.log(`input is valid`);
        setIsErrorVisible(false);
      }
      else {
        console.log(`input is invalid`);
        setIsErrorVisible(true)
        
      }
    });
  }, []); 
  return isErrorVisible;
};

export default ErrorValidation