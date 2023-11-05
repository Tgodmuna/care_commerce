// import React, { useRef, useEffect } from 'react';

// const VideoCarousel = ({ videos }) => {
//   const videoRef = useRef(null);
//   const currentVideoIndex = useRef(0);

//   const playNextVideo = () => {
//     currentVideoIndex.current = (currentVideoIndex.current + 1) % videos.length;
//     videoRef.current.src = videos[currentVideoIndex.current];
//     videoRef.current.play();
//   };

//   useEffect(() => {
//     videoRef.current.muted = true;
//     videoRef.current.controls = false;
//     videoRef.current.onended = playNextVideo;
//     playNextVideo();
//   }, [videos]);

//   return (
//     <div className="video-carousel">
//       <video ref={videoRef} />
//     </div>
//   );
// };

// export default VideoCarousel;
