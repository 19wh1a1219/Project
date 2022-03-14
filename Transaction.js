import React,{Component} from "react";
import './Login.css';
import Login from "./Login";
import axios from "axios";
class Transaction extends Component{
    state = {
        id: 1,
        type: '',
        tdate: '',
        amt: '',
        fireErrors: ''
    }
    // insertData(){
    //     var record = {name:'Sanjana', email:'sanjana@gmail.com', phno:'0987654321', state:'telangana', city:'hyd', password:'1234'};
    // //     var name = document.getElementById("name");
    // //     console.log(name);
    //     axios.post('http://localhost:3000/insertion', record).then((result) => {
    //       console.log(result);
    //   })
    // }

    changeHandler = (event) =>{
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = (event) =>{
        this.id += 1;
        axios.post('http://localhost:3000/insert', this.state).then((result) => {
          console.log(result);
      }).catch(error => {
          console.log(error)
      })
      alert("inserted record");
      event.preventDefault()
    }

    render() {
        return(
            <div className="mainBlock">
            <center>
            <form onSubmit={this.handleSubmit}>
                <input
                type="text"
                name="type"
                className="regField"
                placeholder="enter type of transaction"
                onChange={this.changeHandler}
                /><br/><br/>
                <input
                type="date"
                name="tdate"
                className="regField"
                placeholder="date of transaction"
                onChange={this.changeHandler}
                /><br/><br/>
                <input
                type="text"
                name="amt"
                className="regField"
                placeholder="Amount of transaction"
                onChange={this.changeHandler}
                /><br/><br/>
        <button type="submit" className="submitBtn"> Submit Trnsaction </button>
        </form>
        </center>
        </div>
        );
    }
}
export default Transaction;