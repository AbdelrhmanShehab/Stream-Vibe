import React, { useEffect, useState, useRef } from "react";
import "./movieDet.css";
import MainBtn from "../../components/MainBtn";
import SquareImg from "../../components/SquareImg";
import pauseIcon from "../../assets/imgs/pause.svg";
import playIcon from "../../assets/imgs/playIcon.svg";
import soundIcon from "../../assets/imgs/soundIcon.svg";
import muteIcon from "../../assets/imgs/muteIcon.svg";
import returnIcon from "../../assets/imgs/returnIcon.svg";
import YouTube from "react-youtube";
import { fetchTrailer } from "../../utils/youtube";

const MovieBanner = ({
  backgroundMovieBanner,
  titleMovieBanner,
  descMovieBanner,
}) => {
  const [trailerId, setTrailerId] = useState(null); // Store the YouTube video ID
  const [showTrailer, setShowTrailer] = useState(false); // Control when to show the trailer
  const [isMuted, setIsMuted] = useState(false); // Track mute state
  const [isPaused, setIsPaused] = useState(false); // Track pause state
  const [isPlayerReady, setIsPlayerReady] = useState(false); // Track if the player is ready
  const playerRef = useRef(null); // Ref to store the YouTube player instance

  // Fetch the trailer when the component loads
  useEffect(() => {
    const getTrailer = async () => {
      const videoId = await fetchTrailer(titleMovieBanner); // Use the movie title to fetch the trailer
      setTrailerId(videoId);
    };
    getTrailer();
  }, [titleMovieBanner]);

  // Show the trailer after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTrailer(true); // Set showTrailer to true after 3 seconds
    }, 3000);
    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  // Handle when the YouTube player is ready
  const onReady = (event) => {
    playerRef.current = event.target; // Store the player instance
    setIsPlayerReady(true); // Set player ready to true
    console.log("YouTube player is ready:", playerRef.current); // Debugging
  };

  // Play the video
  const handlePlay = () => {
    if (playerRef.current) {
      console.log("Playing the video"); // Debugging
      playerRef.current.playVideo();
      setIsPaused(false); // Update pause state
    } else {
      console.error("Player instance is null"); // Debugging
    }
  };

  // Pause the video
  const handlePause = () => {
    if (playerRef.current) {
      console.log("Pausing the video"); // Debugging
      playerRef.current.pauseVideo();
      setIsPaused(true); // Update pause state
    } else {
      console.error("Player instance is null"); // Debugging
    }
  };

  // Mute/unmute the video
  const handleMute = () => {
    if (playerRef.current) {
      console.log("Player instance:", playerRef.current); // Debugging
      if (isMuted) {
        playerRef.current.unMute();
      } else {
        playerRef.current.mute();
      }
      setIsMuted(!isMuted); // Toggle mute state
    } else {
      console.error("Player instance is null"); // Debugging
    }
  };

  // Return to the cover photo
  const handleReturnToCover = () => {
    setShowTrailer(false); // Hide the trailer
    if (playerRef.current) {
      playerRef.current.stopVideo(); // Stop the video
      playerRef.current = null; // Reset the player instance
      setIsPlayerReady(false); // Set player ready to false
    }
  };

  // YouTube player options
  const opts = {
    height: "668",
    width: "100%",
    playerVars: {
      autoplay: 1, // Autoplay the video when it's shown
    },
  };

  // Icons data
  const squareDataMovie = [
    {
      squareIcon: returnIcon,
      squareColor: "#0F0F0F",
      onClick: handleReturnToCover, // Return to cover
    },
    {
      squareIcon: isPaused ? playIcon : pauseIcon, // Toggle between play and pause icons
      squareColor: "#0F0F0F",
      onClick: isPaused ? handlePlay : handlePause, // Toggle between play and pause
    },
    {
      squareIcon: isMuted ? muteIcon : soundIcon,
      squareColor: "#0F0F0F",
      onClick: handleMute, // Mute/unmute
    },
  ];

  return (
    <>
      <figure className="movieBanner">
        <div className="fade-movies-shows"></div>

        {/* Show the cover image or the trailer */}
        {!showTrailer ? (
          <img
            loading="lazy"
            src={backgroundMovieBanner}
            alt="background"
            className="background-movie-banner"
          />
        ) : trailerId ? (
          <YouTube
            videoId={trailerId}
            opts={opts}
            onReady={onReady}
            className="youtube-video"
          />
        ) : (
          <img
            loading="lazy"
            src={backgroundMovieBanner}
            alt="background"
            className="background-movie-banner"
          />
        )}

        <figcaption className="title-desc-movie-banner center-tranform">
          <h1>{titleMovieBanner}</h1>
          <p>{descMovieBanner}</p>
        </figcaption>

        <div className="three-icons-banner">
          <MainBtn btnContent="Play Now" showIcon iconSize="18px" />
          {squareDataMovie.map((data, index) => (
            <SquareImg
              key={index}
              squareIcon={data.squareIcon}
              squareColor={data.squareColor}
              onClick={data.onClick} // Use the onClick handler from the data
              disabled={!showTrailer || !isPlayerReady} // Disable if trailer isn't shown or player isn't ready
            />
          ))}
        </div>
      </figure>
    </>
  );
};

export default MovieBanner;
