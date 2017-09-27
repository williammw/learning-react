//10.1
import React from 'react';
// 11.1 
import VideoListItem from './video_list_item';
const VideoList = (props) => {
    // 10.3 explain of the props
    //(props) const videos = props.videos; <--explaination

    // 12.2 
    const VideoItems = props.videos.map((video) => {
        // 12.3 ((.)(.)) we're using google youtube api and adding a key using etag of response data.
        // version 1
        //return <VideoListItem video={video} />
        // adding key [=> key={video.etag} <=]
        return (
                 <VideoListItem  
                    onVideoSelect = {props.onVideoSelect}
                    key={video.etag} 
                    video={video} />
                );
        // 12.3 the warrning (Each child in an array or iterator should have a unique "key" prop.)
    });
    return (
        <ul className="col-md-4 list-group">
        {/* 11.1 */}
            {VideoItems}
        </ul>
    );
};
export default VideoList;