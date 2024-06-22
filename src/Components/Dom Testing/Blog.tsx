import { Component } from 'react'

export default class Blog extends Component {
  render() {
    return (
      <div className='main'>
        <ul>
          <li key="Angular" className='list'>Angular</li>
          <li key='react' className='list'>React</li>
          <li key='node' className='list'>Node</li>
        </ul>

        <div className='numbers'>
          <span>One</span>
          <span>Two</span>
        </div>
        <div>
          <button className='submit-btn button'>Submit</button>
        </div>
        <div className='Extra-class'/>

      </div>
    )
  }
}
