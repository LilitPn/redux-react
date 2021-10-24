import React from 'react'
import StepOne from './steps/StepOne';
import StepTwo from './steps/StepTwo';


function App() {
  const [step, setStep] = React.useState(1);

  const changeStep = (step) => {
    setStep(step);
  }

  return (
    <>
      {step === 1 && <StepOne step={step} getStep={changeStep} />}
      {step === 2 && <StepTwo step={step} getStep={changeStep} />}
    </>
  );
}

export default App;