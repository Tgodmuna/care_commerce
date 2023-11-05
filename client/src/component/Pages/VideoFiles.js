import React from 'react';
import VideoCarousel from './VideoCarousel';

const videoFiles = [
  'video1.mp4',
  'video2.mp4',
  'video3.mp4',
  // Add more video files as needed
];

function App() {
  return (
    <div className="App">
    <VideoCarousel videos={videoFiles} />
  </div>
  );
}

export default App;
