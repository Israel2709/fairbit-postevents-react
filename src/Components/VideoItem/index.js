import React from 'react'
import './style.scss'
import {
    Col
} from 'reactstrap'

const VideoItem = ( props ) => {
    const { cover, speaker, title, video } = props.video
    const { avatar, business, job, name, picture } = props.speaker
    return (
        <Col xs="12" md="3">
            <div className="card video-card">
                <div className="card-header bg-white">
                    <div className="speaker-label d-flex align-items-center">
                        <img src={ avatar } alt="" />
                        <div className="speaker-data">
                            <h2>{ name }</h2>
                            <h3 className="text-muted">{ business }</h3>
                        </div>
                    </div>
                </div>
                <div className="video-cover" style={{backgroundImage: `url(${cover})`}}></div>
                <h3 className="card-title p-3 m-0">{title}</h3>
                <div className="card-footer bg-white b-0">
                    <a href={video} target="_blank">ver video</a>
                </div>
            </div>
        </Col>
    );
};

export default VideoItem;