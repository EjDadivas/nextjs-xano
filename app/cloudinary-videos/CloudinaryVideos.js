import React from 'react'

const CloudinaryVideos = () => {

    const vid1URL  =  new URLSearchParams({
        public_id: 'aom/faded',
        cloud_name: 'da12csktz',
        analytics: true
    }).toString();

    const vid2URL  =  new URLSearchParams({
        public_id: 'aom/shift',
        cloud_name: 'da12csktz',
     
    }).toString();

    const vid3URL  =  new URLSearchParams({
        public_id: 'aom/beautifulmadness',
        cloud_name: 'da12csktz',
      
    }).toString();


  return (
    <div>
    Cloudinary Videos 1
        <iframe
        src={'https://player.cloudinary.com/embed/?' + vid1URL}
        width="640"
        height="360"
        allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
        undefined
        allowfullscreen
        frameborder="0"
        ></iframe>

        <iframe
        src={'https://player.cloudinary.com/embed/?' + vid2URL}
        width="640"
        height="360"
        allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
        undefined
        allowfullscreen
        frameborder="0"
        ></iframe>

        <iframe
        src={'https://player.cloudinary.com/embed/?' + vid3URL}
        width="640"
        height="360"
        allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
        undefined
        allowfullscreen
        frameborder="0"
        ></iframe>
    </div>
  )
}

export default CloudinaryVideos