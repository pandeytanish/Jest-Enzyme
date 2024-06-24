import axios from 'axios'
import { Component } from 'react'

interface State {
    name : string,
    error : boolean,
    id : number
}
export default class Axis extends Component<{},State> {
    constructor(props : {}){
        super(props)

        this.state = {
            name : '',
            error : false,
            id : 0
        }
    }

    componentDidMount() {
        this.func(90,80)
    }

    func = async (no1: number, no2: number) => {
        let url = 'https://jsonplaceholder.typicode.com/posts';
        const options = {
            method: 'GET',
            url : url 
        }
      try{
       let response = await axios(options)
       this.setState({
        id : response.data.id
       })
      }
      catch(e){
        console.log("Error")
      }
      
    }
  render() {
    return (
      <div>Axis</div>
    )
  }
}
