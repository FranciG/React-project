import React, { Component } from "react";
import ListItem from "./ListItem";

class List extends Component {


  render() {
   
    return this.props.list.map((list) =>(
      <ListItem/>
    ));
  }
}

export default List;