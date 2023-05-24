import { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';

import Square from './components/Square.jsx';
import WinnerModal from './components/WinnerModal.jsx';
import Tablero from './components/Tablero.jsx';

import { TURNS } from './utils/constants.js';
import { checkWinner , checkEndGame } from './utils/logic.js';
import { saveGameToStorage, resetGameStorage } from './storage/localStorage.js';

import './App.css';

function App() {

  const [board, setBoard] = useState(() =>{
    const boardFromLocalStorage = window.localStorage.getItem('board')
    if(boardFromLocalStorage) return JSON.parse(boardFromLocalStorage)
    return Array(9).fill(null)
  })

  const [turn, setTurn] = useState(() =>{
    const turnFromLocalStorage = window.localStorage.getItem('turn')
    return turnFromLocalStorage ?? TURNS.X
  })

  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    resetGameStorage()
  }

  function updateBoard(index) {
    if (board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  useEffect(() =>{
    saveGameToStorage(board, turn)
  }, [turn, board])

  return (
    <main className='board'>
      <h1>Ta Te Ti</h1>
      <button onClick={resetGame}>Reset partida</button>
      <Tablero board={board} updateBoard={updateBoard} />
      <section className='turn'>
        <Square isSelected={turn === TURNS.X} >
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>
      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  )
}

export default App
