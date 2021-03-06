import React, {Component} from 'react';
import { GlobalStyled } from './style.js';
import { GlobalIcon } from './statics/iconfont/iconfont';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail';
import Login from './pages/login';
import store from './store'
import {Provider} from 'react-redux'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          
          <BrowserRouter>
            <div>
              <GlobalStyled />
              <GlobalIcon />
              <Header />
              <Route path="/" exact component={Home}></Route>
              <Route path="/detail/:id" exact component={Detail}></Route>
              <Route path="/login" exact component={Login}></Route>
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
