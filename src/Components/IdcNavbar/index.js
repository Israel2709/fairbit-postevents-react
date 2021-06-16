import React, { useState } from 'react';
import './style.scss'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

import idcLogo from '../../assets/IDC_TRANSTELCO_PostEvento.png'
import logoDigital from '../../assets/IDC_TRANSTELCO_PostEvento_TransLogo.png'

const IdcNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md" className="d-flex justify-content-between fixed-top">
                <NavbarBrand href="/"><img src={idcLogo} alt="" /></NavbarBrand>
                <NavbarBrand href="/"><img src={logoDigital} alt="" /></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href="/components/">HOME</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">VIDEOS</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">PRESENTACIONES</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default IdcNavbar;