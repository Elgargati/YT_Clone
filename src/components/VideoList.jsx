import React from "react";

const VideoList = ({ videos, onVideoSelect, favorites, toggleFavorite }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
      {videos.map((video) => (
        <div
          key={video.id.videoId}
          className="bg-white rounded-lg shadow-md border border-gray-200 cursor-pointer"
          onClick={() => onVideoSelect(video)}
        >
          <img
            src={video.snippet.thumbnails.medium.url}
            alt={video.snippet.title}
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="font-bold text-lg text-gray-800 truncate">
              {video.snippet.title}
            </h3>
            <button
              className={`mt-2 px-3 py-1 text-sm rounded-lg ${
                favorites.some((fav) => fav.id.videoId === video.id.videoId)
                  ? "bg-red-500 text-white"
                  : "bg-gray-300 text-gray-700"
              }`}
              onClick={(e) => {
                e.stopPropagation();
                toggleFavorite(video);
              }}
            >
              {favorites.some((fav) => fav.id.videoId === video.id.videoId)
                ? "Retirer des favoris"
                : "Ajouter aux favoris"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoList;
