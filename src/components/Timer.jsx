import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      store: null,
      inp: '',
      hour: '00',   
      min: '00',
      sec: '00',
      val: '00:00:00',
      startFlag: true,
      enterFlag: true
    };
  }

  start = () => {
    if(this.state.enterFlag) {
        this.setState({
            hour: this.state.inp  >= 60 ? Math.floor(this.state.inp / 60) : '00',
            min: this.state.inp % 60,
            enterFlag: false
        })
    }
    this.state.store = setInterval(() => {     
      this.setState({
        startFlag: false,
      });
      if (this.state.sec > 0) {
        this.setState({
          sec: this.state.sec - 1,
        });
      } else if (this.state.min > 0) {
        this.setState({
          min: this.state.min - 1,
          sec: 59,
        });
      } else if (this.state.hour > 0) {
        this.setState({
          hour: this.state.hour - 1,
          min: 59,
        });
      } else {
        clearInterval(this.state.store);
        alert('Time Up!');
      }
    }, 1000);
  };
  restart = () => {
    clearInterval(this.state.store);
    this.setState({
      startFlag: true,
      sec: '00',
      min: '00',
      hour: '00',
      val: '00:00:00',
    });
  };
  stop = () => {
    this.setState({ startFlag: true });
    clearInterval(this.state.store);
  };
//   Input field to take the time in minutes

  handleTimer = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      enterFlag: true
    });
  };


  render() {
    return (
      <div className="container text-center">
        <h1>Timer</h1>
        <div className="mb-4">
          <input
            name='inp'
            value={this.state.inp}
            onChange={this.handleTimer}
          />
          <h1>
            {this.state.hour} : {this.state.min} : {this.state.sec}
          </h1>
        </div>
        <div>
          <div className="output display-1"></div>
          <button
            type="button"
            className="btn btn-warning mx-3 reset"
            onClick={this.restart}
          >
            Reset
          </button>

          {this.state.startFlag ? (
            <button
              type="button"
              className="btn btn-success mx-3 start"
              onClick={this.start}
            >
              Start
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-danger mx-3 stop"
              onClick={this.stop}
            >
              Stop
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default Timer;
