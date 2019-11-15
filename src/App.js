import React, { Component } from "react";
import List from './components/List';

class App extends Component {
  state = {
    list: [
      {
        id: 1,
        place: "Doesn't matter",
        reserved: false
      },
      {
        id: 2,
        place: "Matter",
        reserved: true
      }
    ]
  };

  render() {
    return (
      <div className={"App"}>
        <List list={this.state.list}></List>
      </div>
    );
  }
}

export default App;
