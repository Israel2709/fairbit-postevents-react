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

const IdcNavbar = ( props ) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const { type, video, presentations } = props 
    return (
        <div>
            <Navbar color="white" light expand="md" className="d-flex justify-content-between fixed-top px-3">
                <NavbarBrand href="/"><img src={idcLogo} alt="" /></NavbarBrand>
                { type !== 'roundtable' && <NavbarBrand href="/"><img src={logoDigital} alt="" /></NavbarBrand> }
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav navbar>
                        <NavItem>
                            <Link to="home" className="nav-link" spy={true} smooth={true} offset={50} duration={200} delay={0} offset={-66}>HOME</Link>
                        </NavItem>
                        {
                            video && <NavItem>
                            <Link to="videos" className="nav-link" spy={true} smooth={true} offset={50} duration={500} delay={0} offset={-66}>VIDEOS</Link>
                            </NavItem>
                        }
                        {
                            presentations && <NavItem>
                            <Link to="presentations" className="nav-link" spy={true} smooth={true} offset={50} duration={200} delay={0} offset={-66}>PRESENTACIONES</Link>
                            </NavItem>
                        }
                        
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default IdcNavbar;