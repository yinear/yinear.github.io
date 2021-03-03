import React, { useState } from 'react';
import { Collapse, Navbar,
NavbarToggler,
NavbarBrand,
Nav,
NavItem,
NavLink,
NavbarText } from 'reactstrap';

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <div className="Header">
        <Navbar color="light" light expand="md">
        <NavbarBrand href="/">yinear.github.io</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/#/bs-components">Bs Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/#/react-logo">React Logo</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/yinear/yinear.github.io">GitHub</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
    );
}

export default Header;