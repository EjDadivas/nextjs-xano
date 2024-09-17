"use client"
import { useEffect, useRef } from 'react';
import cloudinary from 'cloudinary-video-player';
import 'cloudinary-video-player/cld-video-player.min.css';

const CloudinaryVideos3 = () => {
  const cloudinaryRef = useRef();
  const playerRef = useRef();

  useEffect(() => {
    if (cloudinaryRef.current) return;

    cloudinaryRef.current = cloudinary;

    const player = cloudinaryRef.current.videoPlayer(playerRef.current, {
      cloud_name: 'da12csktz',
      secure: true,
      controls: true,
      cloudinaryAnalytics: {customData: {
        customData1: 'Beloit College'
      }}
    });
    player.source("aom/beautifulmadness");
  }, []);

  return (
    <>
    Cloudinary Player 3
    <video
      ref={playerRef}
    //   id={id}
      className="cld-video-player cld-fluid"
   
    />
    </>
  );
};



export default CloudinaryVideos3;