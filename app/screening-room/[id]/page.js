import React from 'react'
import VideoPlayer from './VideoPlayer'

function WatchVideo({params}) {
  return (
    <div>
    <VideoPlayer public_id={params.id}/>
    </div>
  )
}

export default WatchVideo