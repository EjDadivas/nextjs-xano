"use client"
import { useEffect, useRef, useState } from 'react';
import { CldVideoPlayer } from 'next-cloudinary';
import 'next-cloudinary/dist/cld-video-player.css';
// import cloudinary from 'cloudinary-video-player';
// import 'cloudinary-video-player/cld-video-player.min.css';

const VideoPlayer = ({public_id}) => {
    const cloudinaryRef = useRef();
    const playerRef = useRef();
    const [vidURL, setVidURL] = useState('');
    useEffect(() => {
      // if (cloudinaryRef.current) return;
  
      // cloudinaryRef.current = cloudinary;
  
      // const player = cloudinaryRef.current.videoPlayer(playerRef.current, {
      //   cloud_name: 'dj4msy5rr',
      //   secure: true,
      //   controls: true,
      // });
      // player.source(`aom/${public_id}`);
      const vid1URL  =  new URLSearchParams({
        public_id: `aom/${public_id}`,
        cloud_name: 'dj4msy5rr',
        analytics: true,
        showLogo:false
    }).toString();
    setVidURL(vid1URL)
    }, [public_id]);
  
    return (
      <>
      {/* <video
        ref={playerRef}
        className="cld-video-player cld-fluid"
     
      /> */}
        {/* <iframe
        src={'https://player.cloudinary.com/embed/?' + vidURL}
        className=" w-full h-screen"
        allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
        undefined
        allowfullscreen
        frameborder="0"
        ></iframe> */}
         <CldVideoPlayer
            // width="1920"
            // height="1080"
            src={`aom/${public_id}`}
        />
      </>
    );
  };
  


export default VideoPlayer