import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";


function App() {
  const [inputs, setInputs] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  const inputIsValid = inputs.duration >= 1;

  function handleUserInput(inputType, newValue) {
    setInputs(oldInputs => {
        return {
            ...oldInputs,
            // Adding the "+" forces the conversion to a number
            [inputType]: +newValue
        };
    });
  }

  return (
    <>
      <Header />
      <UserInput inputs={inputs} handleUserInput={handleUserInput}/>
      { inputIsValid ? <Results inputs={inputs} /> :
                       <p className="center">Please enter a duration greater than zero.</p>}
    </>
  )
}

export default App
