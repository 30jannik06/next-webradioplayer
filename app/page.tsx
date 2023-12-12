"use client";

import React from "react";
import AudioPlayer from "@/components/AudioPlayer";

const Home: React.FC = () => {
    const radioStreamUrl =
        "https://d111.rndfnk.com/ard/wdr/1live/diggi/mp3/128/stream.mp3?cid=01FBS02KK2TSYGZSY19X8ZJ3RK&sid=2YIiI9oCsRiYeENCb5z0pjJUBbT&token=sQZy-a7n_d2_aezAZi0F6ePNYitKEqUCo6L-ib1BanE&tvf=LynrKDF4mBdkMTExLnJuZGZuay5jb20";

    return (
        <div className="container mx-auto p-4">
            <AudioPlayer streamUrl={radioStreamUrl} />
        </div>
    );
};

export default Home;
