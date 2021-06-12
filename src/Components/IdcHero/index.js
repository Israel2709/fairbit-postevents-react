import React from 'react';

import{
    Container,
    Row,
    Col
} from 'reactstrap'

const IdcHero = () => {
    return (
        <div className="idc-hero-wrapper">
            <Container>
                <Row>
                    <Col xs='12' md={{ size:6, offset:6 }}>
                        <h1>Lorem, ipsum dolor.</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptate repudiandae quos nam doloribus eligendi labore accusantium sint nobis fugit!</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default IdcHero;