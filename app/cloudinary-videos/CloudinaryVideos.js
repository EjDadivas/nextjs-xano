import React from 'react'

const CloudinaryVideos = () => {

    const vid1URL  =  new URLSearchParams({
        public_id: 'aom/d5prsksleg0dxuwjo175',
        cloud_name: 'dj4msy5rr',
        analytics: true
    }).toString();

    const vid2URL  =  new URLSearchParams({
        public_id: 'aom/xskfmj11wtti8kxh3p2c',
        cloud_name: 'dj4msy5rr',
     
    }).toString();

    const vid3URL  =  new URLSearchParams({
        public_id: 'aom/zwwd7knrefkxxydsfiw2',
        cloud_name: 'dj4msy5rr',
      
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