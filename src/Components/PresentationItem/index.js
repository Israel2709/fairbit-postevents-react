import React from 'react';
import './style.scss'
import {
    Col
} from 'reactstrap'

const PresentationItem = ( props ) => {
    const { cover, document, title } = props.presentationData
    const { speakerData, handler } = props 
    return (
        <Col xs="12" md="5">
            <div className="card presentation-card mb-4">
                <div className="card-header d-flex bg-white align-items-center">
                    <img src={ speakerData && speakerData.avatar } alt="" />
                    <div className="speaker-data">
                        <h2>{ speakerData && speakerData.name }</h2>
                        <h3 className="text-muted">{ speakerData && speakerData.job }</h3>
                    </div>
                </div>
                <div className="card-cover" style={{ backgroundImage: `url(${cover})`}}></div>
                <h3 className="card-title p-3">{ title }</h3>
                <div className="card-footer bg-white d-flex">
                    <a onClick={ handler } className="text-primary">baixar</a>
                    <a onClick={ handler } className="text-primary">VER APRESENTAÇÃO</a>
                </div>
            </div>
        </Col>
    );
};

export default PresentationItem;