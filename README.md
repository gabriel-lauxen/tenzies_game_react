# Tenzies game

## 🚀 Overview
The Tenzies game is a React-based game where the objective is to roll dice until all dice show the same value. Players can click on dice to "freeze" them at their current value between rolls.

## Game Mechanics
The game starts with ten dice, each showing a random value between 1 and 6.
Players roll the dice, and the goal is to get all dice to show the same value.
Players can click on a die to hold its current value, preventing it from being rolled again.
The game is won when all ten dice show the same value.
## Key Features in Code
**State Management:** The game uses React state to manage the dice array and the game status (tenzies).
**Effects:** A React effect runs every time the dice state changes to check if all dice have the same value, which determines if the game is won.
**Component Structure:** The main components include the dice (Die), a roll button (Button), and confetti for the win celebration.
