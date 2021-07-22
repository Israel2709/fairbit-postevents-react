import React from 'react';
import './style.scss'
import { Col } from 'reactstrap'


const SpeakerItem = ( props ) => {
    const { avatar, job, name, picture, business } = props.speakerData 
    return (
        <Col xs="6" md="3">
            <div className="d-flex flex-column align-items-center speaker-item">
                <img src={ picture } alt="" className="avatar" /> 
                <h4 className="text-center">{ name }</h4>
                <h5 className="text-center"><b>{ job }</b></h5>
                <h5 className="text-center"><b>{ business }</b></h5>
                {/*
                    <div className="social-wrapper d-flex justify-content-center">
                        <a href="" className="fab fa-facebook-square mx-2"></a>
                        <a href="" className="fab fa-twitter-square mx-2"></a>
                        <a href="" className="fab fa-instagram-square mx-2"></a>
                    </div>*/
                }
            </div>
        </Col>
    );
};

export default SpeakerItem;