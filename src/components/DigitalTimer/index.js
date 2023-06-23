// Write your code here
import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {isClicked: false}

  constructor(props) {
    super(props)
    this.state = {sec: 0, min: 25}
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick = () => {
    const {sec} = this.state
    if (sec < 60 && sec > 0) {
      this.setState(i => ({sec: i.sec - 1}))
    } else {
      this.setState(i => ({min: i.min - 1, sec: 59}))
    }
  }

  onBtnClicked = () => {
    this.setState(i => ({isClicked: !i.isClicked}))
    this.timerID = setInterval(this.tick, 1000)
  }

  onIncrease = () => {
    this.setState(i => ({min: i.min + 1}))
  }

  onDecrease = () => {
    this.setState(i => ({min: i.min - 1}))
  }

  onPause = () => {
    this.setState(i => ({isClicked: !i.isClicked}))
    this.timerID = clearInterval(this.timerID)
  }

  onReset = () => {
    this.timerID = clearInterval(this.timerID)
    this.setState({sec: 0, min: 25})
    this.setState({isClicked: false})
  }

  render() {
    const {isClicked, sec, min} = this.state

    return (
      <div className="cont">
        <h1>Digital Timer</h1>

        <div className="insideCont">
          <div className="cont1">
            <div className="cont2">
              <h1 className="head">
                {min < 10 ? `0${min}` : min}:{sec < 10 ? `0${sec}` : sec}
              </h1>
              <p className="paraMain">{isClicked ? 'Running' : 'Paused'}</p>
            </div>
          </div>

          <div className="setCont">
            <div className="cont3">
              <div className="btnPara">
                {isClicked ? (
                  <button
                    onClick={this.onPause}
                    className="btnStyle"
                    type="button"
                  >
                    <img
                      className="btnImg"
                      src="https://assets.ccbp.in/frontend/react-js/pause-icon-img.png"
                      alt="pause icon"
                    />
                    Pause
                  </button>
                ) : (
                  <button
                    onClick={this.onBtnClicked}
                    className="btnStyle"
                    type="button"
                  >
                    <img
                      className="btnImg"
                      alt="play icon"
                      src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png "
                    />
                    Start
                  </button>
                )}
              </div>
              <div className="btnPara">
                <button
                  onClick={this.onReset}
                  className="btnStyle"
                  type="button"
                >
                  <img
                    className="btnImg"
                    alt="reset icon"
                    src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png "
                  />
                  <p>Reset</p>
                </button>
              </div>
            </div>

            <div className="lastCont">
              <p>Set Timer Limit</p>
              <div className="last1">
                <button
                  onClick={!isClicked ? this.onDecrease : null}
                  className="minusBtn"
                  type="button"
                >
                  -
                </button>
                <p className="para">{min > 24 ? min : 25}</p>
                <button
                  onClick={!isClicked ? this.onIncrease : null}
                  className="minusBtn"
                  type="button"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
