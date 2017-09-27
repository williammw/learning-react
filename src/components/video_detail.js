import React from 'react';

const VideoDetail = ({video}) => {
//15.2
    const videoId = video.id.videoId;
    //const url = 'https://www.youtube.com/embed/'+ videoId;
    //15.3 ES6 string 
    const url = `https://www.youtube.com/embed/${videoId}`;
//15.1
    return (
        <div className="video-detaul col-md-8">
            <div className="embed-responsive embed-responsive-16y9">
                <iframe className="embed-responsive-item" src={url}> </iframe>
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snipper.decsciption}</div>
            </div>
        </div>
    );
};

export default VideoDetail