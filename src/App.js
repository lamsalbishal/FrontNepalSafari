import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router ,Route} from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Navbar from './component/NavBar';
import AdminHome from './admin/HomeAdmin';
import PackagePage from './admin/PackagePage';
import PackageDetail from './admin/PackageDetail';
import BookPage from './admin/Book';
import SignUp from './admin/Signup';

class App extends Component {
  render() {
    return (
      <div className="App">
        
       <Router>
         
         <div>
         <Navbar/>
           <Route exact path="/" component={Home}/>
           <Route path="/about" component={About}/>
           <Route path="/admin" component={AdminHome}/>
           <Route path="/package" component={PackagePage}/>
           <Route path="/packagedetail" component={PackageDetail} />
           <Route path="/signup" component={SignUp} />
           <Route path="/book" component={BookPage} />
         </div>
       </Router>
        
      </div>
    );
  }
}

export default App;
