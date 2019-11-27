import React, { Component } from "react";
class StopClock extends Component {
  state = {
    timeOn: false,
    startTimer: 0,
    timerTime: 0
  };

  startTime = () => {
    this.setState({
      timeOn: true,
      timerTime: this.state.timerTime,
      startTimer: Date.now() - this.state.timerTime
    });
    this.timer = setInterval(() => {
      this.setState({
        timerTime: Date.now() - this.state.startTimer
      });
    }, 10);
    console.log("mytime",this.state)
  };

  stopTime = () => {
    this.setState({ timeOn: false });
    clearInterval(this.timer);
  };

  resetTime = () => {
    this.setState({
      startTimer: 0,
      timerTime: 0
    });
  };

  render() {
    const { timerTime } = this.state;
    let centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
    let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);
    return (
      <div >
        
        <div >
          {hours} : {minutes} : {seconds} : {centiseconds}
        </div>
        {this.state.timeOn === false && this.state.timerTime === 0 && (
          <button onClick={this.startTime}>Start</button>
        )}
        {this.state.timeOn === true && (
          <button onClick={this.stopTime}>Stop</button>
        )}
        {this.state.timeOn === false && this.state.timerTime > 0 && (
          <button onClick={this.startTime}>Resume</button>
        )}
        {this.state.timeOn === false && this.state.timerTime > 0 && (
          <button onClick={this.resetTime}>Reset</button>
        )}
      </div>
    );
  }
}

export default StopClock;