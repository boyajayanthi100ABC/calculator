// Write your code here.

import './index.css'
import {Component} from 'react'

class LettersCalculator extends Component {
  state = {count: ''}

  countNum = e => {
    this.setState({count: e.target.value})
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div>
          <h1> Calculate the Letters you enter </h1>
          <label> Enter the phrase </label>
          <input
            type="text"
            placeholder="Enter the phrase"
            className="phrase"
            onChange={this.countNum}
          />
          <br />
          <button type="button" className="button">
            No.of letters: {count.length}
          </button>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            className="img"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
