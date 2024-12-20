import React, { useState, useEffect } from "react";
import { fetchVideos } from "./YoutubeAPI";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetails from "./components/VideoDetails";
import FavoriteVideos from "./components/FavoriteVideos";
import Footer from "./components/Footer";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    handleSearch("React tutorials");
  }, []);

  const handleSearch = async (query) => {
    const fetchedVideos = await fetchVideos(query);
    setVideos(fetchedVideos);
    setSelectedVideo(null);
  };

  const toggleFavorite = (video) => {
    if (favorites.some((fav) => fav.id.videoId === video.id.videoId)) {
      setFavorites(
        favorites.filter((fav) => fav.id.videoId !== video.id.videoId)
      );
    } else {
      setFavorites([...favorites, video]);
    }
  };

  return (
    <>
      <Header onSearch={handleSearch} />
      <div className="min-h-screen bg-gray-100 p-4">
        <VideoDetails video={selectedVideo} />
        <FavoriteVideos
          favorites={favorites}
          onVideoSelect={setSelectedVideo}
        />
        <VideoList
          videos={videos}
          onVideoSelect={setSelectedVideo}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
        />
      </div>
      <Footer />
    </>
  );
};

export default App;
