/* Realistic use of useRef demo */
import { useRef, useState } from "react";

export default function UseRefDemoTwo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null); // 1. Create the ref

  function handleClick() {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause(); // 3. Use the ref to call DOM functions
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center mb-10">
         <h2 className="text-2xl font-bold m-4">Realistic Use of useRef Demo</h2>
      <button onClick={handleClick}> {isPlaying ? "Pause" : "Play"} </button>
      {/* 2. Initialise the ref */}
      <video ref={videoRef} width="250">
        <source
          type="video/mp4"
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
        />
      </video>
    </div>
  );
}
