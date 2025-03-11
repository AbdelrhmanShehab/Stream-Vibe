const API_KEY = "AIzaSyDOZWLlQ21d6m90PEh98BEo9UVADJSffig"; // Replace with your API key

export const fetchTrailer = async (movieTitle) => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
        movieTitle + " official trailer"
      )}&type=video&key=${API_KEY}`
    );
    const data = await response.json();
    if (data.items && data.items.length > 0) {
      return data.items[0].id.videoId; // Return the first video ID
    }
    return null; // No trailer found
  } catch (error) {
    console.error("Error fetching trailer:", error);
    return null;
  }
};