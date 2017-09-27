import React from 'react';


const VideoListItem = ({video, onVideoSelect}) => {
    const imageUrl = video.snippet.thumbnails.default.url;
    // 13.2
    //const onVideoSelect = props.onVideoSelect.
    //const video = props.video is === const VideoListItem = ({video}})
    // 13.1
    //console.log(video);
    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl} />
                </div>
                <div className="media-body">
                <div className="media-heading" title={video.snippet.title}></div>
                </div>
            </div>
        </li>
    ); 
};
export default VideoListItem;
 