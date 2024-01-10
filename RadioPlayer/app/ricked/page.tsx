"use client";
import React from "react";
import ReactPlayer from "react-player";

const Ricked: React.FC = () => {
    const youtubeVideoURL =
        "https://www.youtube.com/watch?v=dQw4w9WgXcQ?autoplay=1";

    return (
        <div className="flex items-center justify-center h-screen bg-gray-800">
            <div className="max-w-screen-lg w-full mx-auto">
                <ReactPlayer
                    url={youtubeVideoURL}
                    playing={true}
                    controls={false}
                    width="auto"
                    height="70vh"
                    volume={1}
                />
            </div>
        </div>
    );
};

export default Ricked;
