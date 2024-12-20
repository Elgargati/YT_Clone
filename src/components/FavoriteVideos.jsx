import React from "react";

const FavoriteVideos = ({ favorites, onVideoSelect }) => {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold">Vidéos favorites</h2>
      {favorites.length === 0 ? (
        <p className="text-gray-600">Aucune vidéo favorite pour le moment.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {favorites.map((video) => (
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
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoriteVideos;
