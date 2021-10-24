import { useState } from "react";

export default function StepOne(props) {
    const idPattern = /^[0][1-9]\d{10}$|^[1-9]\d{10}$/;
    const phonePattern = /^(\+7)\([489][0-9]{2}\)[0-9]{7}$/;

    const [id, setId] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [errors, setErrors] = useState(['', ''])

    const handleChange = () => {
        if (!checkValidation()) {
            props.getStep(2);
        }
    }

    const checkValidation = () => {
        let hasError = false;
        let newErrors = [...errors];

        if (!idPattern.test(id)) {
            newErrors[0] = "id error";
            hasError = true;
        } else {
            newErrors[0] = "";
        }

        if (!phonePattern.test(phoneNumber)) {
            newErrors[1] = "phone error";
            hasError = true;
        } else {
            newErrors[1] = "";
        }

        setErrors(newErrors);

        return hasError;
    }

    return (
        <>
            <div>
                <input type="number" onChange={(ev) => setId(ev.target.value)} />
                <p><em>{errors[0]}</em></p>
            </div>
            <div>
                <input type="text" onChange={(ev) => setPhoneNumber(ev.target.value)} />
                <p><em>{errors[1]}</em></p>
            </div>
            <div>
                <button onClick={handleChange}>change step 1</button>
            </div>
        </>
    )
}