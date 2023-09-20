import {useEffect} from 'react'
import './index.css'

const Leader = props => {
  const {firstName, email, mobileNo, timeLeft, data} = props
  console.log(data)

  const storedFirstName = JSON.parse(localStorage.getItem('firstName'))
  const storedEmail = JSON.parse(localStorage.getItem('email'))
  const storedMobileNo = JSON.parse(localStorage.getItem('mobileNo'))
  const storedTimeLeft = JSON.parse(localStorage.getItem('timeLeft'))

  useEffect(() => {
    localStorage.setItem('firstName', JSON.stringify(firstName))
  }, [firstName])

  useEffect(() => {
    localStorage.setItem('email', JSON.stringify(email))
  }, [email])
  useEffect(() => {
    localStorage.setItem('mobileNo', JSON.stringify(mobileNo))
  }, [mobileNo])

  useEffect(() => {
    localStorage.setItem('score', JSON.stringify(timeLeft))
  }, [timeLeft])

  return (
    <div>
      <h1 className="leader">Leader Board</h1>

      <table className="styled-table">
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>MobileNo</th>
          <th>Saved Time</th>
        </tr>

        <tbody>
          <tr>
            <td>{storedFirstName}</td>
            <td>{storedEmail}</td>
            <td>{storedMobileNo}</td>
            <td>{storedTimeLeft}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Leader
