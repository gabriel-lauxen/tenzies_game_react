export default function Dice ({value,isHeld,holdDice}) {
    
    const styles = {
        backgroundColor: isHeld ? "#59E391" : '#ffffff'
    }
    
    return (
        <div onClick={holdDice} className='die-face' style={styles}>
            <h2 className="die-num">{value}</h2>
        </div>
    )
}