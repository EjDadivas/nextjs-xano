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
      cloud_name: 'dj4msy5rr',
      secure: true,
      controls: true,
    });
    player.source("aom/zwwd7knrefkxxydsfiw2");
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