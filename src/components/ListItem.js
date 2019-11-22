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

    render() {
        return (
            <div style={this.getStyle()}>
               <p>
                   <input type="checkbox"/>
                   {this.props.list.place}
                   </p> 
            </div>
        )
    }
}

export default ListItem
