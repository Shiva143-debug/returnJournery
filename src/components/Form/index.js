import {Component} from 'react'

import GreenLightRedLight from '../GreenLightRedLight'
import './index.css'

class Form extends Component {
  state = {
    firstName: '',
    email: '',
    mobileNo: '',
    selectedOption: '',
    showFirstNameError: false,
    showEmailError: false,
    showMobileError: false,
    isFormSubmitted: false,
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  validateFirstName = () => {
    const {firstName} = this.state
    return firstName !== ''
  }

  onChangeEmail = event => {
    this.setState({email: event.target.value})
  }

  validateEmail = () => {
    const {email} = this.state
    return email !== ''
  }

  onChangeMobile = event => {
    this.setState({mobileNo: event.target.value})
  }

  validateMobile = () => {
    const {mobileNo} = this.state
    return mobileNo !== ''
  }

  BlurFirstName = () => {
    const validateFirstName = this.validateFirstName()
    this.setState({showFirstNameError: !validateFirstName})
  }

  BlurEmail = () => {
    const validateEmail = this.validateEmail()
    this.setState({showEmailError: !validateEmail})
  }

  BlurMobile = () => {
    const validateMobile = this.validateMobile()
    this.setState({showMobileError: !validateMobile})
  }

  handleSelectChange = e => {
    this.setState({selectedOption: e.target.value})
  }

  formSubmit = event => {
    event.preventDefault()

    const isValidFirstName = this.validateFirstName()
    const isValidEmail = this.validateEmail()
    const isValidMobile = this.validateMobile()

    if (isValidFirstName && isValidEmail && isValidMobile) {
      this.setState({isFormSubmitted: true})
    } else {
      this.setState({
        showFirstNameError: !isValidFirstName,
        showEmailError: !isValidEmail,
        showMobileError: !isValidMobile,
        isFormSubmitted: false,
      })
    }
  }

  renderSuccessCard = () => (
    <div className="Success-card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-image"
      />
      <p>Submitted Successfully</p>
    </div>
  )

  render() {
    const {
      firstName,
      email,
      mobileNo,
      selectedOption,
      showFirstNameError,
      showEmailError,
      showMobileError,
      isFormSubmitted,
    } = this.state

    const className = showFirstNameError ? 'input-bg' : ''
    const className2 = showEmailError ? 'input-bg' : ''
    const options = ['EASY', 'MEDIUM', 'HARD']
    return (
      <div className="app-container">
        <div className="card">
          {isFormSubmitted ? (
            <GreenLightRedLight
              selectedOption={selectedOption}
              firstName={firstName}
              email={email}
              mobileNo={mobileNo}
            />
          ) : (
            <form className="form" onSubmit={this.formSubmit}>
              <h1 className="head">Registration</h1>
              <div>
                <label htmlFor="First" className="label">
                  FIRST NAME
                </label>
                <br />
                <input
                  type="text"
                  id="First"
                  onChange={this.onChangeFirstName}
                  onBlur={this.BlurFirstName}
                  value={firstName}
                  className={className}
                />
                {showFirstNameError && <p className="error">Required</p>}
                <br />
                <label htmlFor="email" className="label">
                  Email
                </label>
                <br />
                <input
                  type="email"
                  id="email"
                  onChange={this.onChangeEmail}
                  onBlur={this.BlurEmail}
                  value={email}
                  className={className2}
                />
                {showEmailError && <p className="error">Required</p>}
                <br />
                <label htmlFor="mobile" className="label">
                  Mobile No
                </label>
                <br />
                <input
                  type="Number"
                  id="mobile"
                  onChange={this.onChangeMobile}
                  onBlur={this.BlurMobile}
                  value={mobileNo}
                  className={className}
                />
                {showMobileError && <p className="error">Required</p>}
                <br />
                <label htmlFor="dropdown">Select an option:</label>
                <br />
                <select
                  id="dropdown"
                  value={selectedOption}
                  onChange={this.handleSelectChange}
                >
                  <option value="">Select an option</option>
                  {options.map(option => (
                    <option value={option}>{option}</option>
                  ))}
                </select>
                <br />
                <button type="submit" className="button">
                  Submit
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    )
  }
}
export default Form
