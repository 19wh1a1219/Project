import './App.css';
import { NavBar } from './components/Forms/NavBar';
import Home from './components/Forms/Home';
//import Login from './components/Forms/Login';
// import Register from './components/Forms/Register';
import Main from './components/Forms/Main';
//import Dashboard from './components/Forms/Dashboard';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShowHistory from './components/Forms/ShowHistory';
//import { BarChart, Dashboard } from '@material-ui/icons';
import { Login } from './components/Forms/Login';
import Piechart from './components/Forms/Piechart'
import { Dashboard } from '@material-ui/icons';


function App() {
  return (

    // <Main />

    //  <ShowHistory />

    <Router>
      <NavBar />
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/Login" element={<Login />} />
         <Route path="/Dashboard" element={<Dashboard />} />
         <Route path="/Main" element={<Main />} />
       </Routes>
    </Router>
  )
}
export default App;






// import './App.css';
// import { NavBar } from './components/Forms/NavBar';
// import Home from './components/Forms/Home';
// import { Login } from './components/Forms/Login';
// // import Register from './components/Forms/Register';
// import Main from './components/Forms/Main';
// //import Dashboard from './components/Forms/Dashboard';
// // import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import ShowHistory from './components/Forms/ShowHistory';
// import { BarChart, Dashboard } from '@material-ui/icons';
// import { Login2 } from './components/Forms/Login2';


// function App() {
//   return (
//     // <Router>
//     //   <NavBar />
//     //   <Switch>
//     //      <Route path="/" element={<Home />} />
//     //      {/* <Route path="/Login" element={<Login />} /> */}
//     //      <Route path="/Main" element={<Main />} />
//     //    </Switch>
//     // </Router>

//     <Main />
//   )
// }
// export default App;
