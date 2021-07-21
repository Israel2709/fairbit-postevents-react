import React from 'react';
import './style.scss'

import{
    Container,
    Row,
    Col
} from 'reactstrap'

const IdcHero = ( props ) => {
    const { title, abstract, masterGraphic } = props
    return (
        <div id="home" className="idc-hero-wrapper" style={{backgroundImage : `url(${masterGraphic})` }} >
            <Container className="h-100">
                <Row className="h-100">
                    <Col xs='12' md={{ size:6, offset:6 }} className="d-flex flex-column justify-content-center text-white">
                        <h1>{ title }</h1>
                        <div>{ abstract }</div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default IdcHero;