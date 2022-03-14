import React, { Component } from 'react'
import axios from 'axios'
export default class Display extends Component {

  constructor(){
    super()
    this.state = {
      records : []
    }
  }
  getData(){
      axios.get('http://localhost:3000/fetch').then((result) => {
        console.log(result.data);
        this.setState({
          records : result.data,
        })
    })
  }
  render() {
    return (
      <div>
        <table>
          <thead>
          <tr>
            <th>ID</th>
            <th>Type</th>
            <th>Date</th>
            <th>Amount</th>
            
          </tr>
          </thead>
          <tbody>
          {this.state.records.map((element) => (
            <tr><td>{element.transID}</td>
            <td>{element.type}</td>
            <td>{element.TransDate}</td>
            <td>{element.amount}</td>
            </tr>
          ))}
          </tbody>
        </table>
        <button onClick = {this.getData()}>Display Data</button>   
      </div>
    )
  }
}
