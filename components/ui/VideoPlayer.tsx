import React from "react";

type VideoPlayerPropType = {
  video: {
    url: string;
    legend: string;
  };
};
const VideoPlayer = (video: VideoPlayerPropType) => {
  const { url, legend } = video.video;
  return (
    <div>
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
