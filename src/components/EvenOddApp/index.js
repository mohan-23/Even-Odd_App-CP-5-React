import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {number: 0, message: 'Even'}

  onIncrement = () => {
    const randomNumber = Math.ceil(Math.random() * 100)

    this.setState({number: randomNumber})
    console.log(randomNumber)

    if (randomNumber % 2 === 0) {
      this.setState({message: 'Even'})
    } else {
      this.setState({message: 'Odd'})
    }
  }

  render() {
    const {number, message} = this.state

    return (
      <div className="body-container">
        <div className="container">
          <h1 className="count-heading">Count {number}</h1>
          <p className="para">Count is {message}</p>
          <button className="button" type="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p className="random-para">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
