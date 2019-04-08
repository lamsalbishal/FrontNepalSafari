import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router ,Route} from 'react-router-dom';
import Home from '../build/srcfolder/component/Home';
import About from './About';
import Navbar from './NavBar';
import AdminHome from './HomeAdmin';
import PackagePage from './PackagePage';
import PackageDetail from './PackageDetail';
import BookPage from './Book';
import SignUp from './Signup';

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
