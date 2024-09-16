"use client"
import { useEffect, useRef } from 'react';
import cloudinary from 'cloudinary-video-player';
import 'cloudinary-video-player/cld-video-player.min.css';
import { useRouter } from 'next/router'

const VideoPlayer = ({public_id}) => {
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
      player.source(`aom/${public_id}`);
    }, []);
  
    return (
      <>
      <video
        ref={playerRef}
        className="cld-video-player cld-fluid"
     
      />
      </>
    );
  };
  


export default VideoPlayer