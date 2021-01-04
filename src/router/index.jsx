/*
  * @Author: tiantian
  * @Date: 2020-12-30 11:02:31
 * @LastEditTime: 2021-01-04 18:03:13
 * @LastEditors: Please set LastEditors
  * @Description: In User Settings Edit
  * @FilePath: \house-evaluation-fed:\FXQ\my-app\src\routes\index.js
*/

import React, { Component } from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch 
} from 'react-router-dom';
import AsyncComponent from '../utils/asyncComponent.jsx';
console.log('AsyncComponent', AsyncComponent);

const Home = AsyncComponent(() => import('../views/Home'));
console.log('home', Home);

class App extends Component {
 render() {
   return (
    <Router>
      <Switch>
        <Route path="/" exact ></Route>
      </Switch>
    </Router>
   )
 }
}

export default App;
 
 
