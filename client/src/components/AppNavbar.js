import React, { Component, Fragment  } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Media,
  Container
} from 'reactstrap';
import RegisterModal from './auth/RegisterModal';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LoginModal from './auth/LoginModal';
import Logout from './auth/Logout';
import paella from '../paella.svg';

var imgStyle = {
  maxWidth: "50px",
};

class AppNavbar extends Component {

    state = {
        isOpen:false
     } 
     static propTypes = {
      auth: PropTypes.object.isRequired
    };
//Switching isOpen to their opposite state.
     toggle = () => {
        this.setState({
          isOpen: !this.state.isOpen
        });
        }

        render() {
//If is authenticated, will show username

const { isAuthenticated, user } = this.props.auth;
//Links for authenticated users
const authLinks = (
  <Fragment>
    <NavItem>
      <span className='navbar-text mr-3'>
        <strong>{user ? `Bienvenido ${user.name}` : ''}</strong>
      </span>
    </NavItem>
    <NavItem>
      <Logout />
    </NavItem>
  </Fragment>
);
//Accessible links for guests
const guestLinks = (
  <Fragment>
    <NavItem>
      <RegisterModal />
    </NavItem>
    <NavItem>
      <LoginModal />
    </NavItem>
  </Fragment>
);
// <img src={paella} alt="" />
            return (
            <div>
                <Navbar color="info" dark expand="sm" className="mb-5">

                <Container>
                 
            <NavbarBrand  href='/'>Restaurantes de paellitas </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className='ml-auto' navbar>
             
              {isAuthenticated ? authLinks : guestLinks}
              </Nav>
            </Collapse>
          </Container>
         
        
          <Media>
      
        <Media style={imgStyle} object src={paella} alt="paella" />
      </Media>
                </Navbar>
            </div>
            );
        } 

    }
    const mapStateToProps = state => ({
      auth: state.auth
    });
    
    export default connect(
      mapStateToProps,
      null
    )(AppNavbar);