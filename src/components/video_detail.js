import React from 'react';

const VideoDetail = ({video}) => {
    if(!video){
        return <div>....</div>;
    }
//15.2
    const videoId = video.id.videoId;
    //const url = 'https://www.youtube.com/embed/'+ videoId;
    //15.3 ES6 string (alt+ numpad 9 6)
    const url = `https://www.youtube.com/embed/${videoId}`;
//15.1
    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url} > </iframe>
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );
};

export default VideoDetail;