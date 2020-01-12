import React, {Component} from 'react';
import { GlobalStyled } from './style.js';
import { GlobalIcon } from './statics/iconfont/iconfont';
import Header from './common/header';
import store from './store'
import {Provider} from 'react-redux'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GlobalStyled />
        <GlobalIcon />
        <Header />
        
      </Provider>
    );
  }
}

export default App;
