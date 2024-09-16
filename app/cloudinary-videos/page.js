import Image from "next/image";
import CloudinaryVideos from "./CloudinaryVideos";
import CloudinaryVideos2 from "./CloudinaryVideos2";
import CloudinaryVideos3 from "./CloudinaryVideos3";

export default function CloudinaryPage() {
  return (
   <div className="p-32">

    <CloudinaryVideos/>
    <CloudinaryVideos2 />
    <CloudinaryVideos3/>
   </div>
  );
}
