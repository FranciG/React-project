import React, { Component } from 'react'

export class ListItem extends Component {
getStyle = () => {
    if(this.props.list.reserved) {
return {
    textDecoration: "line-through"
}
    } else {
        return {
            textDecoration: "none"
        }
    }
}

    render() {
        return (
            <div style={this.getStyle()}>
               <p>{this.props.list.place}</p> 
            </div>
        )
    }
}

export default ListItem
