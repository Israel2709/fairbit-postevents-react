import React from 'react';
import './style.scss'
import VideoItem from '../VideoItem';

const IdcVideos = ( props ) => {
    let { video, speakersList } = props
    return (
        <>
            <div className="col-12">
                <h2 className="text-center my-4">Videos</h2>
            </div>
            <div className="col-12">
                <div class="row video-wrapper">
                    {
                        video && video.map( (video, index) => {
                           return <VideoItem key={index} videoData = {video} speakerData={ speakersList[video.speaker]}/>
                        })
                    }
                </div>
            </div>
        </>
    );
};

export default IdcVideos;