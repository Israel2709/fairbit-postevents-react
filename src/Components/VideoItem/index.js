import React from 'react'
import './style.scss'
import {
    Col
} from 'reactstrap'

const VideoItem = () => {
    return (
        <Col xs="12" md="3">
            <div className="card video-card">
                <div className="card-header bg-white">
                    <div className="speaker-label d-flex align-items-center">
                        <img src="https://i.pravatar.cc/150?img=4" alt="" />
                        <div className="speaker-data">
                            <h2>Speaker Name</h2>
                            <h3 className="text-muted">Speaker Business</h3>
                        </div>
                    </div>
                </div>
                <div className="video-cover"></div>
                <h3 className="card-title p-3 m-0">title</h3>
                <div className="card-footer bg-white b-0">
                    <a href="">ver video</a>
                </div>
            </div>
        </Col>
    );
};

export default VideoItem;