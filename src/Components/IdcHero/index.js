import React from 'react';
import './style.scss'

import heroBg from '../../assets/IDC_TRANSTELCO_PostEvento_MGweb.png'

import{
    Container,
    Row,
    Col
} from 'reactstrap'

const IdcHero = ( props ) => {
    const { title, abstract, masterGraphic } = props
    return (
        <div id="home" className="idc-hero-wrapper" style={{ backgroundImage:`url("https://firebasestorage.googleapis.com/v0/b/idc-latam.appspot.com/o/events%2Fbusiness%2Ftranstelco%2Fmg%2FIDC_TRANSTELCO_PostEvento_MGweb.png?alt=media&token=af221379-818b-4397-9de4-bb6db0841135")`}}>
            <Container className="full-height">
                <Row className="h-100">
                    <Col xs='12' md={{ size:6, offset:6 }} className="d-flex flex-column justify-content-center text-white">
                        <h1>{ title }</h1>
                        <p>{ abstract }</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default IdcHero;