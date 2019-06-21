import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import {fetchSmurfs} from '../actions';
import './App.css';
import Smurfs from './Smurfs';
import SmurfForm from './SmurfForm';
import Navigation from './Navigation';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount() {
    this.props.fetchSmurfs();
  }
  render() {
    return (
      <div className="container">
        <Navigation/>
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <Route exact path="/" component={Smurfs}/>
        <Route path={`/view-smurf/:smurfId`} componet={Smurfs} />
        <Route exact path={'/smurf-form'} component={SmurfForm} />
        <Route path={`/smurf-form/:smurfId`} compoent={SmurfForm} />
      </div>
    );
  }
}

export default connect(null,{fetchSmurfs})(App);
