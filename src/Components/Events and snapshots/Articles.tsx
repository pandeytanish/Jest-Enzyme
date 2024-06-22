import React, { Component } from 'react'
import Tabel from './Tabel'
interface State {
    count : number
}

export default class Articles extends Component<{},State> {
    constructor(props : {}) {
        super(props)
        this.state = {
            count : 0
        }
    }
  render() {
    return (
      <div>
        <div className='click-1'></div>
        <div className={`click-${this.state.count}`}>
            {this.state.count} clicks
        </div>
        <button onClick={() => {this.setState({count : this.state.count + 1})}}>Increment</button>
        <h1>Article Details</h1>
        <Tabel/>
      </div>
    )
  }
}
