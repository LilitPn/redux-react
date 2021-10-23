export default function StepOne(props) {
    const handleChange = () => {
        props.getStep(2);
    }

    return (
        <>
            <button onClick={handleChange}>change step</button>
            <h1>Step 1</h1>
        </>
    )
}