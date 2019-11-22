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
//Change the restaurant status to reserved/free
  markReserved = (id) => {
    this.setState({list : this.state.list.map(list =>{
      if(list.id === id) {
        list.reserved = !list.reserved
      }
      return list;
    })});

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
