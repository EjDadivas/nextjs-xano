import Image from "next/image";
import CloudinaryVideos from "./CloudinaryVideos";
import CloudinaryVideos2 from "./CloudinaryVideos2";

export default function CloudinaryPage() {
  return (
   <div className="p-32">

    <CloudinaryVideos/>
    <CloudinaryVideos2 />
   </div>
  );
}
