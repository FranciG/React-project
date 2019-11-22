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
                   <input type="checkbox" onChange={this.props.markReserved.bind
                   (this, id)}
                   
                   />
                   {place}
                   
                   </p> 
            </div>
        )
    }
}

export default ListItem
