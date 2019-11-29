import React, { Component } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from  "./components/AppNavbar";
import ItemList  from "./components/ItemList";
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {


//Provider is used to share state through components
  render() {

    return (
       <Provider store={store}>
      <div className={"App"}>
     
      <AppNavbar/>
      <ItemList/>
      </div>
      </Provider>
    );
  }
}

export default App;
