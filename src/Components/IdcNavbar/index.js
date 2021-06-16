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

import { Link } from 'react-scroll'

import idcLogo from '../../assets/IDC_TRANSTELCO_PostEvento.png'
import logoDigital from '../../assets/IDC_TRANSTELCO_PostEvento_TransLogo.png'

const IdcNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="white"  expand="md" className="d-flex justify-content-between fixed-top">
                <NavbarBrand href="/"><img src={idcLogo} alt="" /></NavbarBrand>
                <NavbarBrand href="/"><img src={logoDigital} alt="" /></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav navbar>
                        <NavItem>
                            <Link to="home" className="nav-link" spy={true} smooth={true} offset={50} duration={200} delay={0} offset={-66}>HOME</Link>
                        </NavItem>
                        {
                            /*<NavItem>
                            <Link to="videos" spy={true} smooth={true} offset={50} duration={500} delay={0} offset={-66}>VIDEOS</Link>
                            </NavItem>*/
                        }
                        <NavItem>
                            <Link to="presentations" className="nav-link" spy={true} smooth={true} offset={50} duration={200} delay={0} offset={-66}>PRESENTACIONES</Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default IdcNavbar;