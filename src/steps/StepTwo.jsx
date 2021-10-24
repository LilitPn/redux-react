import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dispatch } from 'redux';
import './styles.css'
export default function StepTwo(props) {
    const codePattern = /^\d{4}$/;

    const [codes, setCodes] = useState([0, 0, 0, 0]);
    const [codesRefs, setcodesRefs] = React.useState([]);
    const [firstFocus, setFirstFocus] = React.useState(true);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setcodesRefs(codesRefs => (
            Array(codes.length).fill().map((_, i) => codesRefs[i] || React.createRef())
        ));
    }, []);

    const handleCodeChange = (ev, index) => {
        let newCodes = [...codes];
        newCodes[index] = ev.target.value;

        setCodes(newCodes);

        if (index !== 3 && firstFocus) {
            codesRefs[index + 1].focus();
        } else {
            setFirstFocus(false);
        }
    }

    const handleCodeFocus = (ev) => {
        ev.target.placeholder = "";
        ev.target.value = "";
    }

    const checkValidation = () => {
        let hasError = false;
        let codesStr = `${codes[0]}${codes[1]}${codes[2]}${codes[3]}`;

        if (!codePattern.test(codesStr)) {
            setError('code error');
            hasError = true;
        } else {
            setError('');
        }

        return hasError;
    }

    const handleChange = () => {
        if (!checkValidation()) {
            setIsLoading(true)
            setTimeout(() => {
                props.getStep(3);
                setIsLoading(false)
            }, 4000);
        }
    }

    const CodeInputs = codes.map((_, i) =>
        <input
            key={i}
            type="text"
            placeholder='*'
            onChange={(ev) => handleCodeChange(ev, i)}
            ref={(input) => { codesRefs[i] = input; }}
            onFocus={(ev) => handleCodeFocus(ev)}
        />
    )

    return (
        <>
            <div>
                <div>{CodeInputs}</div>
                <p><em>{error}</em></p>
            </div>
            <div>
                <button onClick={handleChange}>change step 2</button>
            </div>
            {isLoading && <div className="overlay">Loading...</div>}
        </>
    )
}