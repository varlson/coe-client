import React, { useState } from "react";
import Spinner from "./Spinner";

type VideoPlayerPropType = {
  video: {
    url: string;
    legend: string;
  };
};
const VideoPlayer = (video: VideoPlayerPropType) => {
  const [videoLoading, setVideoLoading] = useState(false);
  const loadingHandle = () => {
    setVideoLoading(true);
  };
  const { url, legend } = video.video;

  // if (!videoLoading)
  //   return (
  //     <div className="w-9/12 m-auto">
  //       <p>Loading ....</p>
  //     </div>
  //   );

  return (
    <div>
      {/* {!videoLoading ? <} */}

      <iframe
        title="Sobre o curso"
        className="rounded w-full object-cover"
        src={url}
        width="640"
        height="480"
        frameBorder="0"
        allowFullScreen
        allow="encrypted-media"
      ></iframe>
      <div className="my-2">
        <p className="font-Jura">{legend}</p>
      </div>
    </div>
  );
};

export default VideoPlayer;
