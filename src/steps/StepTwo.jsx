export default function StepTwo(props) {
    const handleChange = () => {
        props.getStep(1);
    }

    return (
        <>
            <button onClick={handleChange}>change step</button>
            <h1>Step 2</h1>
        </>
    )
}