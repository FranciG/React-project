import React, { Component } from "react";
import ListItem from "./ListItem";

class List extends Component {


  render() {
   //Props are passed from app.js this.state.list, being mapped through, then the output is what is on listitem
    return this.props.list.map((list) =>(
      <ListItem key={list.id} list={list} markReserved={this.props.markReserved}/>
    ));
  }
}

export default List;