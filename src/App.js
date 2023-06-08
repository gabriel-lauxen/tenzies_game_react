import React from 'react';
import './style.css';
import Die from './components/Die'
import Button from './components/Button';
import {nanoid} from "nanoid"

function App() {

  const [dice,setDice] = React.useState(allNewDice)
  const [tenzies,setTenzies] = React.useState(false)

  /**
 * Challenge:
 * 1. Add new state called `tenzies`, default to false. It
 *    represents whether the user has won the game yet or not.
 * 2. Add an effect that runs every time the `dice` state array 
 *    changes. For now, just console.log("Dice state changed").
 */
  React.useEffect(() => {
    let firstDie = dice[0]
    let validated = true
    for (let i = 0; i < dice.length;i++) {
      console.log(!dice[i].isHeld)
      console.log(dice[i].value)
      console.log(firstDie.value)
      console.log('----------')
      if (!dice[i].isHeld || dice[i].value !== firstDie.value) {
        validated = false
      }
    }
    if (validated) console.log('Ganhouu')
  },[dice])

  function generateNewDie () {
    return {
      id: nanoid(),
      value: Math.ceil(Math.random() * 6),
      isHeld: false
    }
  }

  function allNewDice () {
    const newDice = []
    for (let i = 0;i < 10;i++) {
      newDice.push(generateNewDie())
    }
    return newDice
  }
  function rollDice () {
    setDice(oldDice => oldDice.map(die => {
      return die.isHeld ? 
        die :
        generateNewDie()
    }))
  }

  function holdDice (id) {
    setDice(oldDice => oldDice.map(die => {
        return die.id === id ?
          {...die,isHeld: !die.isHeld} :
          die
    }))
  }

  const diceElements = dice.map(die => 
      <Die
        key={die.id}
        holdDice={() => holdDice(die.id)}
        value={die.value}
        isHeld={die.isHeld}
      />
    )
  
  return (
    <main className="app">
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className='dice-container'>
        {diceElements}
      </div>
      <Button buttonText='Roll' handleClick={rollDice}/>
    </main>
  );
}

export default App;
