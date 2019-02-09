import React, { Component } from 'react'

export default class Timer extends Component {
  constructor () {
    super();

    this.state = {
      timer: 0,
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        timer: this.state.timer + 1,
      })
    }, 1000)
  }
 
  render() {
    const { timer } = this.state;

    return (
      <div>
        Timer: {timer}
      </div>
    )
  }
}
