import React, { useState } from "react";
import { VolumeControl } from "./VolumeControl";
import { RadioStationSelector } from "./RadioStationSelector";
import { NowPlayingLabel } from "./NowPlayingLabel";
import { AudioController } from "./AudioController";
import { IRadioStation } from "@/interfaces/IRadioStation";
import { IAudioPlayerProps } from "@/interfaces/IAudioPlayerProps";
import { useLanguage } from "./LanguageProvider";
import { TogglePlay } from "./TogglePlay";

export const AudioPlayer: React.FC<IAudioPlayerProps> = () => {
    const [isPlaying, setPlaying] = useState(false);
    const [volume, setVolume] = useState(0.5);
    const [selectedRadio, setSelectedRadio] = useState<IRadioStation | null>(
        null
    );

    const { language } = useLanguage();

    const togglePlay = () => {
        setPlaying(!isPlaying);
    };

    const handleVolumeChange = (newVolume: number) => {
        setVolume(newVolume);
    };

    const handleRadioChange = (selectedStation: IRadioStation | null) => {
        setSelectedRadio(selectedStation);
    };

    return (
        <div className="flex justify-center items-center bg-primary p-6 rounded-lg shadow-lg">
            <div className="flex flex-col items-center justify-center mb-4">
                <TogglePlay isPlaying={isPlaying} onTogglePlay={togglePlay} />
                <NowPlayingLabel
                    language={language}
                    selectedRadio={selectedRadio}
                />
                <AudioController
                    isPlaying={isPlaying}
                    volume={volume}
                    selectedRadio={selectedRadio}
                    onTogglePlay={togglePlay}
                    onVolumeChange={handleVolumeChange}
                />
                <VolumeControl
                    volume={volume}
                    onVolumeChange={handleVolumeChange}
                    language={language}
                />
                <RadioStationSelector
                    onChange={handleRadioChange}
                    language={language}
                />
            </div>
        </div>
    );
};
