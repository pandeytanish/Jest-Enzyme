import {Component} from 'react'

export default class Tabel extends Component {
  render() {
    return (
      <table className='table'>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Demo</td>
                <td>NA</td>
            </tr>
        </tbody>

      </table>
    )
  }
}
