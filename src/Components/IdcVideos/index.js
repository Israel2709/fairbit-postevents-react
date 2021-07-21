import React from 'react';
import './style.scss'
import VideoItem from '../VideoItem';

const IdcVideos = ( props ) => {
    const { videoList, speakersList } = props
    return (
        <>
            <div id="videos" className="col-12">
                <h2 className="text-center my-4">Videos</h2>
            </div>
            <div className="row video-wrapper">
                {
                    (speakersList && videoList ) &&  videoList.map( (video,index) => <VideoItem videoData = { video } speakerData = { speakersList[video.speaker] } key={ index } /> )
                }
            </div>
        </>
    );
};

export default IdcVideos;