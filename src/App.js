// import React from 'react';
import React, { Component } from 'react';
import Main from './components/MainComponent';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/ConfigureStore';


const store = ConfigureStore();

class App extends Component {

  

  render() {
    return (
      <Provider store={store}>
        {/*adding BrowserRouter. the application now is congigured to make use of the react router*/}
        <BrowserRouter>
          <div className="App">
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
