import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
//Connect allows to get state from redux to react
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';

  
  

class ItemList extends Component {
    static propTypes = {
        getItems: PropTypes.func.isRequired,
        item: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool
    };

    componentDidMount(){
        this.props.getItems();
    }
onDeleteClick = (id) => {
this.props.deleteItem(id);
}


render () {
    //The state comes from redux, accessed from this.props.item. We pull items from it
    const { items} = this.props.item;
    return(
<Container>
   
    <ListGroup>
        <TransitionGroup className="Item-List">
            {items.map(({_id, name})=> (
                <CSSTransition key={_id} timeout={500} classNames="fade">
                    <ListGroupItem>
                        
                        {this.props.isAuthenticated ? 
                            <Button
                        className="remove-btn"
                        color="danger"
                        size="sm"
                        onClick= {this.onDeleteClick.bind(this, _id)}
                        >
                            &times;
                        </Button>
                        : 
                        <Button
                        
                        color="secondary" size="sm" disabled 
                        style={{ marginRight: '1rem' }}
                        >
                        
                           Edit
                        </Button>
                        }
                       
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
    item: state.item,
    isAuthenticated: state.auth.isAuthenticated
    
  });
export default connect(mapStateToProps, {getItems, deleteItem}) (ItemList);