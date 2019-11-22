import React, { Component } from 'react'

export class ListItem extends Component {
getStyle = () => {
    return {
        padding:"15px",
        
        textDecoration: this.props.list.reserved ?
        "line-through": "none"
        
    }
/* long way to do it
    if(this.props.list.reserved) {
return {
    textDecoration: "line-through"
}
    } else {
        return {
            textDecoration: "none"
        }
    } */
}
//The function takes an event parameter

    render() {
        const {id, place} =this.props.list;
        return (
            <div style={this.getStyle()}>
               <p>
               
                   <button onClick={this.props.markReserved.bind(this, id)} style={btnStyle} >Reserve</button>
                   {place}
                   
                   </p> 
            </div>
        )
    }
}

const btnStyle = {
    background: '#222222',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    
    cursor: 'pointer',
    float: 'right'
  }

export default ListItem
