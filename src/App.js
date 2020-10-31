import React, { useEffect, Fragment } from 'react';
import './App.css';

import Homescreen from './Routes/Homescreen/Homescreen';
import Login from './Routes/Login/Login';
import Video from './Routes/Video/Video';
import Upload from './Routes/Upload/Upload';

import { useSelector } from 'react-redux';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  
  const isLogged = useSelector(state => state.data.user);
  

  useEffect(() => {

  },[isLogged])

  // console.log(isLogged);
  
  return (
    // <Homescreen />
    <Fragment>
      {isLogged ? 
        <Router>
        <Switch>
          <Route path='/' exact component={Homescreen} />
          <Route exact path='/upload' component={Upload} />
          <Route exact  path='/video/:id' component={Video} />
        </Switch>
      </Router>  :
      <Login />
      }
    </Fragment>
    // <Login />
  );
}

export default App;
