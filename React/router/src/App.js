import React, { Component } from 'react'
import { BrowserRouter, NavLink, Route } from 'react-router-dom'
import About from './Component/About';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <ul>
        <li><NavLink to="/" style={{color:"green"}} exact activeStyle={
          {color:'red'}
        }>Home</NavLink></li>
       <li> <NavLink to="/about" style={{color:'green'}} activeStyle={
         {color:'red'}
       }>About</NavLink></li>
        </ul>
          <Route exact path='/' render={
            () => {
              return (<h1>Welcome Home</h1>);
            }
          } />
          <Route exact path="/about" component={About}/>

        </div>
      </BrowserRouter>
    )
  }
}
