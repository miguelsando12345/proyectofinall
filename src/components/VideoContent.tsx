import React from "react";

const VideoContent = () => {
  return (
    <div className="min-h-screen py-16 bg-gray-900 text-white">
      <h1 className="text-4xl font-bold text-center mb-8">
        Inspire Your Passion
      </h1>
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6">
        {/* Texto motivacional */}
        <div className="lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-left">
          <p className="text-lg mb-4">
            Watch this powerful video to fuel your motivation. Whether you're
            training hard or taking your game to the next level, remember that
            dedication and perseverance are key. Every step you take today
            brings you closer to victory.
          </p>
          <p className="text-md text-gray-400">
            Stay focused on your goals, keep pushing forward, and remember that
            success is earned through hard work and relentless spirit. You're
            capable of more than you think — so start believing and make it
            happen!
          </p>
        </div>

        {/* Video */}
        <div className="lg:w-1/2 flex justify-center">
          <iframe
            className="rounded-lg shadow-lg"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/yxvaURdWJS8"
            title="Motivational Soccer Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoContent;
