import React from 'react';
import './style.scss'
import VideoItem from '../VideoItem';

const IdcVideos = () => {
    return (
        <div>
            <h2 className="text-center my-4">Videos</h2>
            <div class="video-wrapper">
                <VideoItem />
            </div>
        </div>
    );
};

export default IdcVideos;