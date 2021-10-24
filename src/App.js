import './App.css';
import React from 'react'
import { useDispatch } from 'react-redux';
import { handleInitialData } from './service/service'
import StepOne from './steps/StepOne';
import StepTwo from './steps/StepTwo';



function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(handleInitialData());
  // }, []);

  const [step, setStep] = React.useState(2);

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