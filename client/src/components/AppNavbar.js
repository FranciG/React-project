import React, { Component, Fragment } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';

class AppNavbar extends Component {

    state = {
        isOpen:false
     } 

//Switching isOpen to their opposite state.
     toggle = () => {
        this.setState({
          isOpen: !this.state.isOpen
        });
        }

        render() {
            return (
            <div>
                <Navbar color="dark" dark expand="sm" className="mb-5">

                <Container>
            <NavbarBrand href='/'>Restaurants </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className='ml-auto' navbar>
                <NavItem>
                    <NavLink href="google.es">
                        Gulugulu
                    </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>

                </Navbar>
            </div>
            );
        } 

    }
export default AppNavbar;