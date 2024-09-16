"use client"
import VideoPlayer from './VideoPlayer'

export default function page({params}) {
  return (
    <div>
    <VideoPlayer public_id={params.id}/>
    </div>
  )
}

