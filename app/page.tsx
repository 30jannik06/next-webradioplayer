"use client";

import React from "react";
import { AudioPlayer } from "@/components/AudioPlayer";
import { radioStreamUrl } from "@/public/utils/Radiostations";

const Home: React.FC = () => {
    return (
        <div className="container mx-auto p-4">
            <AudioPlayer streamUrl={radioStreamUrl} />
        </div>
    );
};

export default Home;
