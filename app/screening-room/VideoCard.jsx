"use client"
import { useEffect, useRef } from 'react';
import cloudinary from 'cloudinary-video-player';
import 'cloudinary-video-player/cld-video-player.min.css';
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
  

const VideoCard = ({public_id, title, description}) => {
    const cloudinaryRef = useRef();
    const playerRef = useRef();


  useEffect(() => {
    if (cloudinaryRef.current) return;

    cloudinaryRef.current = cloudinary;

    const player = cloudinaryRef.current.videoPlayer(playerRef.current, {
      cloud_name: 'dj4msy5rr',
      secure: true,
      controls: true,
      showLogo:false
    });
    player.source(public_id);
  }, []);
  return (
    <Card className="">
    <CardContent>
    <video
      ref={playerRef}
      className="cld-video-player cld-fluid rounded-md mt-6"
    />
    </CardContent>
    <CardHeader className="">
      <CardTitle>{title}</CardTitle>
      <CardDescription  >{description}</CardDescription>
    </CardHeader>
    <CardFooter className="pt">
        <Button><Link href={`/screening-room/${public_id.split("/")[1]}`}>Watch</Link></Button>
    </CardFooter>
  </Card>
  
  )
}

export default VideoCard