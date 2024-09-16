"use client"
import VideoCard from './VideoCard'
import { Checkbox } from '@/components/ui/checkbox'
 
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function page() {
  const videos = [
    {
      public_id: "aom/d5prsksleg0dxuwjo175",
      title: "Beautiful Madness",
      description: "Beautiful Madness is a short film that explores Bipolar Disorder and how creativity and inspiration can lead to healing and clarity.",
    },
    {
      public_id: "aom/xskfmj11wtti8kxh3p2c",
      title: "Shift",
      description: "During a pandemic, a nurse decides to live in her car to protect her family. The cheesy greeting cards that her son send her begin to take...",
    },
    {
      public_id: "aom/zwwd7knrefkxxydsfiw2",
      title: "Faded",
      description: "“Faded” is an alternative, narrative short film about living with depression, portraying the struggle of doing simple daily tasks that...",
    },
  ]
  const filters = ["Class", "Film", "Wellness", "Completed", "Not Started"]
  return (
    <div>
        <div className="border-b border-2px">
            <div className="text-3xl font-bold my-12 mx-32">My Screening Room</div>
        </div>
        <div className="px-32 my-12">
          <div className="flex mb-10 justify-between">
              <div className="text-xl">4 videos, last updated 5/5/24 </div>
              <div>
                <p className="font-semibold mb-2">Filter by</p>
                <div className="grid grid-cols-2 gap-3">
                {filters.map((filter, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Checkbox id={`filter-${index}`} />
                  <label
                    htmlFor={`filter-${index}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {filter}
                  </label>
                </div>
              ))}
                </div>
              </div>
              <div>
              <p className="font-semibold mb-2">Sort by</p>
              <Select>
              <SelectTrigger className="w-[250px]">
                <SelectValue placeholder="Select Sorting" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Categories</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
              </div>
          </div>
          <div className="grid grid-cols-3 gap-2 grid-rows-auto">
            {
              videos.map((video, index) => (
                <div key={index} className="">
                  <VideoCard 
                  public_id={video.public_id}
                  title={video.title}
                  description={video.description}
                  />
                </div>
              ))
            }

          </div>
        </div>
    </div>
  )
}

