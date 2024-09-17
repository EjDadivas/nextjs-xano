"use client"
import React from 'react';
import { CldVideoPlayer } from 'next-cloudinary';
import 'next-cloudinary/dist/cld-video-player.css';

const CloudinaryVideos2 = () => {
    return (
    <>
    Videos 2
        <CldVideoPlayer
            width="1920"
            height="1080"
            src="aom/faded"
        />
        <CldVideoPlayer
            width="1920"
            height="1080"
            src="aom/shift"
        />
             <CldVideoPlayer
            width="1920"
            height="1080"
            src="aom/beautifulmadness"
        />
        </>
    );
};

export default CloudinaryVideos2;