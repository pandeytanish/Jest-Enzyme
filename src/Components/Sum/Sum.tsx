import  { Component } from 'react'
export default class Sum extends Component{

     sum = (a : number,b : number) => {
        return a + b
     }

     obj = () => {
        return {
            name : 'Tanish'
        }
     }
  render() {
    return (
      <div>Sum </div>
    )
  }
}
