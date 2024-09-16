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
            src="aom/d5prsksleg0dxuwjo175"
        />
        <CldVideoPlayer
            width="1920"
            height="1080"
            src="aom/xskfmj11wtti8kxh3p2c"
        />
             <CldVideoPlayer
            width="1920"
            height="1080"
            src="aom/zwwd7knrefkxxydsfiw2"
        />
        </>
    );
};

export default CloudinaryVideos2;