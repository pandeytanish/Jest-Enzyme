import { Component } from 'react'

interface State {
  name : string
  id : number
}

export default class About extends Component<{}, State> {
  constructor(props: {}) {
    super(props)
    this.state = {
        name: 'Hello',
        id: 23
      
    }
  }


  render() {
    return (
      <div>
        About
        <div className='about-class'>Hello</div>
      </div>
    )
  }
}
