import React from "react";

const VideoDetails = ({ video }) => {
  if (!video)
    return <p className="mt-4 text-center">Sélectionnez une vidéo.</p>;

  return (
    <div className="mt-6 p-4 bg-white rounded-lg shadow-md">
      <iframe
        width="100%"
        height="400"
        src={`https://www.youtube.com/embed/${video.id.videoId}`}
        title={video.snippet.title}
        className="rounded-lg border border-gray-300"
        allowFullScreen
      ></iframe>
      <div className="mt-4">
        <h2 className="text-xl font-bold">{video.snippet.title}</h2>
        <p className="text-gray-600 mt-2">{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetails;
