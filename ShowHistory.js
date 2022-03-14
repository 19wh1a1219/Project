import React, { Component } from 'react'
import axios from 'axios'
import './Main.css'




class ShowHistory extends Component {

  state = {
    rdata : [],
    records : []
  }

  constructor(){
    super()
    this.state = {
      records : []
    }
  }
  getData(){
      axios.get('http://localhost:3000/fetchHistory').then((result) => {
        //console.log(result);
        this.state.records = result.data;
        //console.log(this.state.records);
        this.setState({
          records : result.data,
        })
        for(var i=0; i<this.state.records.length; i++)
        {
          this.state.rdata.add([this.state.record[i].type], [this.state.record[i].amount]);
        }
        console.log(this.state.rdata);
    })
  }
  render() {
    return (
    <center>
      <div  className='mainBlock'>
        <table>
          <thead>
          <tr>
            <th>Trans Id</th>
            <th>Trans type</th>
            <th>Trans date</th>
            <th>Trans amount</th>
            
            
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
        <button onClick = {this.getData()}>History</button>   
      </div></center>
    )
  }
}
export default ShowHistory;