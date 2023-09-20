import './index.css'
import {useState} from 'react'
import Leader from '../Leader'

const Won = props => {
  const {firstName, email, mobileNo, timeLeft} = props

  const [leader, setLeader] = useState(false)

  const LeaderBoard = () => {
    setLeader(true)
  }

  return (
    <div>
      {leader ? (
        <Leader
          firstName={firstName}
          email={email}
          mobileNo={mobileNo}
          timeLeft={timeLeft}
        />
      ) : (
        <div className="won">
          <h1>congratulations</h1>
          <h1>You Won</h1>
          <img
            src="https://res.cloudinary.com/dxgbxchqm/image/upload/v1695041706/realistic-golden-trophy-with-gold-laurel-wreath_48799-144_gr9bs3.avif"
            alt="img"
            className="image"
          />

          <button type="button" onClick={LeaderBoard} className="button">
            check Leader Board
          </button>
        </div>
      )}
    </div>
  )
}
export default Won
