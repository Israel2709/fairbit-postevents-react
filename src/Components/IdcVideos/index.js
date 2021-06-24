import React from 'react';
import './style.scss'
import VideoItem from '../VideoItem';

const IdcVideos = ( props ) => {
    const { videoList, speakersList } = props
    return (
        <div>
            <h2 id="videos" className="text-center my-4">Videos</h2>
            <div class="video-wrapper">
                {
                    (videoList && speakersList) && (
                        videoList.map( (video, index)  => (
                            <VideoItem 
                                key = {index} 
                                video={video}
                                speaker={speakersList[video.speaker]}
                            />
                        ))
                    )
                }
                
            </div>
        </div>
    );
};

export default IdcVideos;