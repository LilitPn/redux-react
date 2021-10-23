import './App.css';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { handleInitialData } from './service/service'



function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(handleInitialData());
  // }, []);

  const [codes, setCodes] = useState([0, 0, 0, 0]);
  const [codesRefs, setcodesRefs] = React.useState([]);
  const [firstFocus, setFirstFocus] = React.useState(true);

  useEffect(() => {
    setcodesRefs(codesRefs => (
      Array(codes.length).fill().map((_, i) => codesRefs[i] || React.createRef())
    ));
  }, []);

  const handlechange = (ev, index) => {
    let newCodes = [...codes];
    newCodes[index] = ev.target.value;
    setCodes(newCodes);

    if (index !== 3 && firstFocus) {
      codesRefs[index + 1].focus();

    } else {
      setFirstFocus(false)
    }
  }

  const handleFocus = (ev) => {
    ev.target.placeholder = "";
    ev.target.value = "";
  }

  const CodeInputs = codes.map((_, i) =>
    <input
      key={i}
      type="text"
      placeholder='*'
      onChange={(ev) => handlechange(ev, i)}
      ref={(input) => { codesRefs[i] = input; }}
      onFocus={(ev) => handleFocus(ev)}
    />
  )

  return (
    <>
      {CodeInputs}
    </>
  );
}

export default App;