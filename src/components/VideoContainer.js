import React, { useEffect, useState } from "react";
import { YT_SEARCH_VIDEOS, YT_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YT_VIDEOS_API);
    const json = await data.json();
    setVideos(json.items);
  };

  // const getSearchVideos = async() => {
  //   const data = await fetch(YT_SEARCH_VIDEOS);
  //   const json = await data.json();
  //   setVideos(json.items)
  // }

  return (
    <div className="flex flex-wrap mt-14">
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
