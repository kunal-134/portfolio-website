import React from "react";

const VideoBackground = () => (
  <video
    autoPlay
    loop
    muted
    playsInline
    className="fixed inset-0 w-full h-full object-cover z-[-10]"
    style={{ pointerEvents: "none", background: "#000" }}
  >
    <source src="https://videos.pexels.com/video-files/10296176/10296176-hd_1920_1080_25fps.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
);

export default VideoBackground;
