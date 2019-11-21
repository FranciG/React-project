import React, { Component } from "react";


class List extends Component {


  render() {
   
    return this.props.list.map((list) =>(
      <h3>{list.place}</h3>
    ));
  }
}

export default List;