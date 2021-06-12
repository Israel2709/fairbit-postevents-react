import React from 'react';

const VideoItem = () => {
    return (
        <div className="card">
            <div className="header">
                <div className="speaker-item">
                    <img src="" alt="" />
                    <div className="speaker-data">
                        <h2>Speaker Name</h2>
                        <h3>Speaker Business</h3>
                    </div>
                    <div className="video-cover"></div>
                    <h3 className="card-title">title</h3>
                    <div className="card-footer">
                        <a href="">ver video</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoItem;