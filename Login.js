import React, { useState } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
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
    let history = useHistory();
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
        //history.push('/Home')
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

















// import React,{Component} from "react";
// import axios from "axios";
// import './Login.css';
// import { useNavigate } from 'react-router-dom'


// //import Home from "./Home";
// //import Dashboard from "./Dashboard";
// //import { BrowserRouter as Router } from 'react-router-dom';

// // import IconButton from "@material-ui/core/IconButton";
// // import InputLabel from "@material-ui/core/InputLabel";
// // import Visibility from "@material-ui/icons/Visibility";
// // import InputAdornment from "@material-ui/core/InputAdornment";
// // import VisibilityOff from "@material-ui/icons/VisibilityOff";
// // import Input from "@material-ui/core/Input";

// class Login extends Component{
    
//     state = {
//         email: '',
//         password: '',
//         showPassword: false,
//         record: [],
//         fireErrors: '',
//     }

//     changeHandler = (event) =>{
//         this.setState({[event.target.name]: event.target.value})
//     }

//     navigatePage = (event) =>{
//         let navigation = useNavigate();
//         event.preventDefault();
//         //navigate('/Dashboard', {replace: true});
//         this.props.navigation.navigate('/Dashboard');

//     }

//       getDetails = (event) =>{
//         axios.get('http://localhost:3000/fetch').then((result) => {
//             this.state.records = result.data;
//           var flag = 0;
//         for(var i=0; i<this.state.records.length; i++)
//         {
//             if((this.state.records[i].email === this.state.email && this.state.records[i].password == this.state.password))
//             {
//               flag = 1;
//               break;
//             }
//         }
//         console.log(flag);
//         if(flag === 0)
//         {
//         alert("Enter valid login details");
//         return;
//         }
//         else
//         {
//         alert("Welcome!!");
//         }
//         })
//       }

//       handleSubmit = (event) =>{
//         //return this.getDetails();
//         return this.navigatePage();
        
//         event.preventDefault()
//     }

//     // handleClickShowPassword = () => {
//     //     this.state.showPassword =  !this.state.showPassword;
//     //   };
      
//     //   handleMouseDownPassword = (event) => {
//     //     event.preventDefault();
//     //   };
    
    
//     render() {
//         const { navigation } = this.props;

//         //let history = useHistory();

//         return(
//             <>
//                 <form onSubmit={this.handleSubmit}>
//                     <input type = "text" 
//                         className="regField"
//                         placeholder="Email"
//                         onChange={this.changeHandler}
//                         name="email"/><br/><br/>

//                     <input type = "password" 
//                         className="regField"
//                         placeholder="Password"
//                         onChange={this.changeHandler}
//                         name="password"/>

//                     {/* <Input className="regField"
//                         name="password"
//                         type={this.state.showPassword ? "text" : "password"}
//                         onChange={this.changeHandler}
//                         value={this.state.password}
//                         endAdornment={
//                         <InputAdornment position="end">
//                             <IconButton
//                             onClick={this.handleClickShowPassword}
//                             onMouseDown={this.handleMouseDownPassword}
//                             >
//                             {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
//                             </IconButton>
//                         </InputAdornment>
//                         }
//                     /><br/> */}

//                     <input type="submit" className="submitBtn" value="ENTER"/><br/><br/><br/>

//                 </form>
//             </>
//         );
//     }
// }
// export default Login;