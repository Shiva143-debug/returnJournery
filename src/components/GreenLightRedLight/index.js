// src/Form.js
import {useState, useEffect} from 'react'
import Won from '../Won'

import './index.css'

const GreenLightRedLight = props => {
  const {selectedOption} = props
  console.log(selectedOption)
  const [gameStarted, setGameStarted] = useState(false)
  const [boxColor, setBoxColor] = useState('green')
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(40)
  const [isWon, setWon] = useState(false)
  const [display, displayWon] = useState(true)

  const getRandomColor = () => {
    const colors = ['red', 'green']
    const randomIndex = Math.floor(Math.random() * colors.length)
    return colors[randomIndex]
  }

  const handleGameOver = () => {
    setGameStarted(false)
    setBoxColor('green')
    alert('game over')
  }

  const handleWin = () => setWon(true)

  useEffect(() => {
    let interval

    if (gameStarted) {
      interval = setInterval(() => {
        setBoxColor(getRandomColor())
        setTimeLeft(prevCount => prevCount - 1)
      }, Math.floor(Math.random() * 1000) + 1000)

      setTimeout(() => {
        clearInterval(interval)
      }, timeLeft * 1000)
    }

    return () => clearInterval(interval)
  }, [gameStarted, boxColor, timeLeft])

  const handleBoxClick = () => {
    if (boxColor === 'green') {
      setScore(score + 1)

      if (selectedOption === 'EASY' && score === 10) {
        handleWin()
        handleGameOver()
      } else if (selectedOption === 'MEDIUM' && score === 15) {
        handleWin()
        handleGameOver()
      } else if (selectedOption === 'HARD' && score === 25) {
        handleWin()
        handleGameOver()
      }
    } else {
      handleGameOver()
      setTimeLeft(40)
      setScore(0)
    }
  }

  const handleStartGame = () => {
    setGameStarted(true)
    setScore(0)
    displayWon(false)
  }

  return (
    <div className="cards">
      {isWon === true && display === false ? (
        <Won />
      ) : (
        <div>
          <div className="main">
            <button
              type="button"
              className="start"
              onClick={handleStartGame}
              disabled={gameStarted}
            >
              Start Game
            </button>
            <br />
            {gameStarted ? (
              <button
                type="button"
                className={boxColor}
                onClick={handleBoxClick}
              >
                .
              </button>
            ) : null}
          </div>

          <div>
            <h2>
              Score: <span>{score}</span>
            </h2>

            <br />
            <h2>
              Time Left: <span className="time">{timeLeft} </span>seconds
            </h2>
          </div>
        </div>
      )}
    </div>
  )
}

export default GreenLightRedLight
