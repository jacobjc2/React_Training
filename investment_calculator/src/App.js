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

  function handleUserInput(inputType, newValue) {
    setInputs(oldInputs => {
        return {
            ...oldInputs,
            [inputType]: newValue
        };
    });
  }

  return (
    <>
      <Header />
      <UserInput inputs={inputs} handleUserInput={handleUserInput}/>
      <Results />
    </>
  )
}

export default App
