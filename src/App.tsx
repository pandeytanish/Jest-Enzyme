import  { Component } from 'react'
import Articles from './Components/Events and snapshots/Articles'
import News from './Components/Instance/News'



export default class App extends Component {

  render() {
    return (
      <div>   
       {/* <Articles/> */}
       <News/>
      </div>
    )
  }
}
