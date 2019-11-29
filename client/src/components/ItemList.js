import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { getItems } from '../actions/itemActions';

class ItemList extends Component {
state = {
    items: [
        {id: uuid(), name: "El paellas"},
        {id: uuid(), name: "Paellero regulero"},
        {id: uuid(), name: "El paellitas"},
        {id: uuid(), name: "El paellitas de marisco"}
    ]
        }
render () {
    const { items} = this.state;
    return(
<Container>
    <Button
        color="dark"
        onClick={()=> {
            const name = prompt("Enter Restaurant");
            if(name) {
                this.setState(state => ({
                    items: [...state.items, {id: uuid(), name}]
                }));
            }
        }}>
   Add item
    </Button>
    <ListGroup>
        <TransitionGroup className="Item-List">
            {items.map(({id, name})=> (
                <CSSTransition key={id} timeout={500} classNames="fade">
                    <ListGroupItem>
                        <Button
                        className="remove-btn"
                        color="danger"
                        size="sm"
                        onClick= {() => {
                            this.setState(state =>({
                                //The element clicked wont be returned in the array(filtered)
                                items: state.items.filter(item => item.id !== id)
                            }));
                        }}
                        >
                            &times;
                        </Button>
                        {name}
                    </ListGroupItem>
                </CSSTransition>
            ))}
        </TransitionGroup>
    </ListGroup>
</Container>
    );
}


}
const mapStateToProps = state => ({
    item: state.item
    
  });
export default connect(mapStateToProps) (ItemList);