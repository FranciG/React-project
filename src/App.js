import React, { Component } from "react";
import List from './components/List';

class App extends Component {
  state = {
    list: [
      {
        id: 1,
        place: "Pequeña italia",
        reserved: false
      },
      {
        id: 2,
        place: "El paellista",
        reserved: true
      }
    ]
  }

  markReserved = (id) => {
    console.log(id)

  }


  render() {

    return (
      <div className={"App"}>
     
        <List list={this.state.list} markReserved = {this.markReserved}/>
     
      </div>
    );
  }
}

export default App;
