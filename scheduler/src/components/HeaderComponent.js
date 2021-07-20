import React, { Component } from 'react';
import { Nav, Navbar, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false,
    };
  }
  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  render() {
    return (
      <div className='navbar'>
        <Navbar className='navbar mr-auto' dark sticky='top' expand='md'>
          <div className='container'>
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className='nav-link' to='/home'>
                    <i className='fa fa-home fa-lg' /> Home
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink className='nav-link' to='/cardanimatedpage'>
                    <i className='fa fa-list fa-lg' /> CardAnimatedPage
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink className='nav-link' to='/animateditemspage'>
                    <i className='fa fa-list fa-lg' /> AnimatedItemsPage
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink className='nav-link' to='/thirdcomponentpage'>
                    <i className='fa fa-list fa-lg' /> ThirdComponentPage
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink className='nav-link' to='/about'>
                    <i className='fa fa-info fa-lg' /> About
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink className='nav-link' to='/contact'>
                    <i className='fa fa-address-card fa-lg' /> Contact
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default Header;
