import React from 'react';
import PresentationItem from '../PresentationItem'
import './style.scss'

import{
    Row,
    Col
} from 'reactstrap'

const IdcPresentations = ( props ) => {
    const { presentations, speakersList } = props
    return (
        <Col xs="12">
            <h2 className="text-center my-4">Presentaciones</h2>
            <Row className="presentations-wrapper">
                <Col md="1">&nbsp;</Col>
                {
                    ( presentations && speakersList ) &&
                        presentations.map( presentation => {
                        return <PresentationItem 
                                    presentationData = { presentation }
                                    speakerData = { speakersList[presentation.speaker] }
                                />
                        
                    })
                }
                
                <Col md="1">&nbsp;</Col>
            </Row>
        </Col>
    );
};

export default IdcPresentations;