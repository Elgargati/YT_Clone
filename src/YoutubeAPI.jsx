import axios from "axios";

const API_KEY = "AIzaSyC5bwLONeq1YcZGDYxP9Jd3UsAq2dxI00E";
const BASE_URL = "https://www.googleapis.com/youtube/v3";

export const fetchVideos = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/search`, {
      params: {
        part: "snippet",
        q: query,
        key: API_KEY,
        type: "video",
        maxResults: 20,
      },
    });
    console.log(response.data);
    return response.data.items;
  } catch (error) {
    console.error(
      "Erreur lors de l’appel API YouTube :",
      error.response || error
    );
    return [];
  }
};
