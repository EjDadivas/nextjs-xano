"use client"
import { useEffect, useRef, useState } from 'react';
// import cloudinary from 'cloudinary-video-player';
// import 'cloudinary-video-player/cld-video-player.min.css';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter, 
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { set } from 'date-fns';



const VideoCard = ({public_id, title, description}) => {
    const cloudinaryRef = useRef();
    const playerRef = useRef();
    const [vidURL, setVidURL] = useState('');

  useEffect(() => {
    if (cloudinaryRef.current) return;

    // cloudinaryRef.current = cloudinary;

    // const player = cloudinaryRef.current.videoPlayer(playerRef.current, {
    //   cloud_name: 'dj4msy5rr',
    //   secure: true,
    //   controls: true,
    //   showLogo:false
    // });
    // player.source(public_id);
    const vid1URL  =  new URLSearchParams({
      public_id: `${public_id}`,
      cloud_name: 'dj4msy5rr',
      analytics: true,
      showLogo:false
  }).toString();
  setVidURL(vid1URL)

  }, [public_id]);
  return (
    <>

    <Card className="">
    <CardContent>
    {/* <video
      ref={playerRef}
      className="cld-video-player cld-fluid rounded-md mt-6"
    /> */}
        <iframe
        src={'https://player.cloudinary.com/embed/?' + vidURL}
        className="rounded-md  mt-6 w-full aspect-video"
        allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
        undefined
        allowfullscreen
        frameborder="0"
        ></iframe>
    </CardContent>
    <CardHeader className="">
      <CardTitle>{title}</CardTitle>
      <CardDescription  >{description}</CardDescription>
    </CardHeader>
    <CardFooter className="pt">
        <Button><Link href={`/screening-room/${public_id.split("/")[1]}`}>Watch</Link></Button>
    </CardFooter>
  </Card>
  </>
  
  )
}

export default VideoCard