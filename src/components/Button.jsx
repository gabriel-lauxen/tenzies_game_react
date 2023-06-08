export default function Button ({buttonText,handleClick}) {
    return (
        <button onClick={handleClick} className="roll-button">
            {buttonText}
        </button>
    )
}