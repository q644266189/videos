import React from "react";
import VideoItem from "./VideoItem";

const VideoList = (props) => {
  const renderdList = props.videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        video={video}
        onSelectVideo={props.onSelectVideo}
      ></VideoItem>
    );
  });
  return <div className="ui relaxed divided list">{renderdList}</div>;
};

export default VideoList;
