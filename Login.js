import React, { useState } from 'react'
import axios from 'axios';
//import { useHistory } from 'react-router-dom';
import Home from './Home';

export const Login = () => {

  const initialValue = {email:'', password:''}
  const [state, setState] = React.useState(initialValue);
  // const [Errors, setErrors] = useState({});
  // const [Submit, setSubmit] = useState(false);

  const changeHandler = (event) =>{
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  }

  const GetDetails = (event) =>{
    // let history = useHistory();
      axios.get('http://localhost:3000/fetch').then((result) => {
      //setState(...state, {[records] : result.data});
      var records = result.data;
      var flag = 0;
      for(var i=0; i<records.length; i++)
      {
        console.log(state.email, state.password);
        if((records[i].email === state.email && records[i].password == state.password))
        {
          flag = 1;
          break;
        }
      }
      console.log(flag);
      if(flag === 0)
      {
        alert("Enter valid login details");
        return;
      }
      else
      {
        alert("Welcome!!");
        // history.push('/Home')
      }
    })
  }

  const handleSubmit = (event) =>{
    //alert("Success!!");
    GetDetails();
    event.preventDefault();
  }


  return (
    <div>
    <form onSubmit={handleSubmit}>
                    <input type = "text" 
                        className="regField"
                        placeholder="Email"
                        value={state.email}
                        onChange={changeHandler}
                        name="email"/><br/><br/>

                    <input type = "password" 
                        className="regField"
                        placeholder="Password"
                        value={state.password}
                        onChange={changeHandler}
                        name="password"/>

                    <input type="submit" className="submitBtn" value="ENTER"/><br/><br/><br/>

                </form>
    </div>
  )
}
